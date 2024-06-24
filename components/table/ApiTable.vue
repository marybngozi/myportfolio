<template>
  <div class="relative border p-3 rounded w-full overflow-scroll">
    <div class="flex justify-between items-center">
      <filter-bar :loading="loading" v-if="showSearch"></filter-bar>

      <div class="w-3/12 flex justify-end">
        <slot name="buttons"></slot>
      </div>
    </div>

    <div
      v-show="loading"
      class="overlay flex flex-col items-center justify-center"
    >
      <app-spinner class="w-16 h-16" color="bg-gray-800"></app-spinner>
    </div>

    <vuetable
      class="mt-4"
      ref="vuetable"
      :api-mode="true"
      :apiUrl="apiUrl"
      :fields="fields"
      :multi-sort="true"
      :sort-order="sortOrder"
      pagination-path="pagination"
      data-path="data"
      :transform="transformData"
      :per-page="perPage"
      :append-params="appendParams"
      :detail-row-component="detailRowComponent"
      @vuetable:pagination-data="onPaginationData"
      @vuetable:loading="onLoading"
      @vuetable:loaded="onLoaded"
      :track-by="trackBy"
      :row-class="onRowClass"
      :httpFetch="$axios"
      :query-params="queryParams"
      :css="css.table"
    >
      <template slot="id" slot-scope="props">
        <div class="cursor-pointer">
          <span>{{ pageIndex + (props.rowIndex + 1) }} </span>
        </div>
      </template>
      <!-- @vuetable:cell-clicked="onCellClicked" -->
      <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope">
        <slot :name="slot" v-bind="scope" />
      </template>
    </vuetable>

    <div v-if="showPage" class="flex justify-between mt-3">
      <vuetable-pagination
        ref="pagination"
        @vuetable-pagination:change-page="onChangePage"
        :css="css.pagination"
      >
      </vuetable-pagination>
      <vuetable-pagination-info ref="paginationInfo"></vuetable-pagination-info>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueEvents from "vue-events";
import Vuetable from "vuetable-2/src/components/Vuetable.vue";
import VuetablePagination from "vuetable-2/src/components/VuetablePagination.vue";
import VuetablePaginationInfo from "vuetable-2/src/components/VuetablePaginationInfo.vue";
import FilterBar from "./FilterBar";
import TableStyle from "../../assets/js/TableStyles";

Vue.use(VueEvents);
Vue.component("filter-bar", FilterBar);

export default {
  name: "ApiTable",
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo,
  },
  data() {
    return {
      css: TableStyle,
      perPage: 10,
      pageIndex: 0,
      loading: false,
    };
  },
  props: {
    bus: {
      type: [Object, String],
      default: null,
    },
    apiUrl: {
      type: String,
      required: true,
    },
    fields: {
      type: Array,
      required: true,
    },
    sortOrder: {
      type: Array,
      default() {
        return [
          {
            field: "createdAt",
            sortField: "createdAt",
            direction: "desc",
          },
        ];
      },
    },
    appendParams: {
      type: Object,
      default() {
        return {};
      },
    },
    queryParams: {
      type: Object,
      default() {
        return {
          sort: "sort",
          page: "page",
          perPage: "pageSize",
        };
      },
    },
    detailRowComponent: {
      type: [String],
      default: null,
    },
    trackBy: {
      type: String,
      default: "id",
    },
    showSearch: {
      type: Boolean,
      default: true,
    },
    showPage: {
      type: Boolean,
      default: true,
    },
  },

  mounted() {
    this.$events.$on("filter-set", (eventData) => this.onFilterSet(eventData));
    this.$events.$on("filter-reset", () => this.onFilterReset());
    this.$events.$on("table-refresh", () => this.onFilterReset());
  },

  created() {
    if (this.bus) {
      this.bus.$on("cellClicked", (data) => {
        this.onCellClicked(data);
      });
    }
  },

  methods: {
    onRowClass(dataItem, index) {
      let cls = "hover:bg-gray-100 ";
      cls += index % 2 ? "bg-gray-100" : "bg-white";
      return cls;
    },
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
      this.$refs.paginationInfo.setPaginationData(paginationData);
    },
    onLoading() {
      this.loading = true;
    },
    onLoaded() {
      this.loading = false;
    },
    async onChangePage(page) {
      await this.$refs.vuetable.changePage(page);
      setTimeout(() => {
        this.pageIndex = page * this.perPage - this.perPage;
      }, 700);
    },
    onCellClicked(data) {
      this.$refs.vuetable.toggleDetailRow(data._id);
    },
    onFilterSet(filterText) {
      this.appendParams.search = filterText;
      Vue.nextTick(() => {
        setTimeout(() => {
          this.$refs.vuetable.refresh();
        }, 500);
      });
      this.pageIndex = 0;
    },
    onFilterReset() {
      delete this.appendParams.search;
      Vue.nextTick(() => {
        setTimeout(() => {
          this.$refs.vuetable.refresh();
        }, 500);
      });
      this.pageIndex = 0;
    },
    transformData(data) {
      const dtt = data.data;
      const transformed = {};
      const aurl = process.env.VUE_APP_API_URL + this.apiUrl;
      const currPage = Number(dtt.currentPage);
      const mtt = currPage * this.perPage;

      transformed.pagination = {
        total: dtt.count,
        per_page: this.perPage,
        current_page: currPage,
        last_page: dtt.totalPages,
        next_page_url: `${aurl}?page=${currPage + 1}`,
        prev_page_url: `${aurl}?page=${currPage - 1}`,
        from: mtt - this.perPage + 1,
        to: dtt.count >= mtt ? mtt : dtt.count,
      };

      transformed.data = dtt.data;

      return transformed;
    },
  },
};
</script>
<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);
  /*dim the background*/
}
</style>
