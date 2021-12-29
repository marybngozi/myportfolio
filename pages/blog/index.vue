<template>
  <div class="blog">
    <button @click="menuClicked = !menuClicked" class="menuBtn">
      <Hamburger :clicked="menuClicked" />
    </button>

    <transition>
      <SideNav class="sidenav" />
    </transition>

    <main class="text-white flex justify-center items-center">
      <h1 class="text-lemon">My Blog</h1>
    </main>
  </div>
</template>

<script>
export default {
  name: "Blog",

  data() {
    return {
      menuClicked: false,
      blogs: [
        {
          id: "2c39d34c-a8d4-70c2-9f56-2044effd7caa",
          title:
            "Minus blanditiis omnis mollitia numquam quaerat veniam dolores vel reiciendis.",
          body: "Quo quam unde necessitatibus et. Consequatur ut quia nemo sed id qui quibusdam. Molestiae et vel autem culpa illo ex sunt doloribus. Doloremque illo rem deleniti aspernatur voluptas quis ea est.",
          date: "04/01/2021",
        },
        {
          id: "158ef5b6-6c32-edf1-8aa5-b869468e7987",
          title:
            "Tempore odit cum distinctio placeat voluptate recusandae autem.",
          body: "Sit sit voluptatem neque aliquam minima aut. Accusantium iste hic. Eaque distinctio aut id.",
          date: "12/03/2021",
        },
        {
          id: "03eee517-3ec4-fbf7-fc01-fc1aeef04011",
          title: "Et eos consectetur.",
          body: "Veritatis labore dolor labore quia vel iusto vel autem iste. Deleniti iure itaque eveniet dolores cumque. Omnis facilis repellat. Assumenda ad ut officiis dolores est voluptas voluptas quam rerum. Qui animi voluptatum.",
          date: "12/25/2021",
        },
        {
          id: "e96bad78-1144-4d02-1445-20573ebe00f2",
          title: "Quia quis et quibusdam esse repellat adipisci.",
          body: "Cum omnis eos est officiis. Ut reiciendis labore et esse aspernatur quam eaque aut enim. Est deserunt sequi voluptas. Reprehenderit et corrupti repellendus. Ut fugit fugit explicabo temporibus harum omnis molestiae. Sunt dolor pariatur minima.",
          date: "04/27/2021",
        },
        {
          id: "7b3335ad-6a89-c9c7-5b76-92de5b88e9bb",
          title: "Tempore nam quidem voluptatibus nesciunt ut.",
          body: "Sint rerum tenetur qui aperiam quibusdam tempore commodi quidem sunt. Harum consequuntur rerum similique illo itaque omnis nemo possimus ad. Velit qui commodi rerum sapiente.",
          date: "09/06/2021",
        },
        {
          id: "ee241c83-b43a-f898-f49d-83af6f3ebaa4",
          title: "Deserunt perspiciatis velit debitis non quia ea.",
          body: "Neque optio sequi est qui distinctio ut. Ut voluptatem pariatur non adipisci velit. Deleniti et ex a delectus.",
          date: "08/12/2021",
        },
        {
          id: "5cde7291-8bfa-313a-3130-ec7d84f0815a",
          title: "Voluptatum dolores quod maxime culpa aut.",
          body: "Sunt magnam voluptatem sit odio est reiciendis dolorem. Laudantium ad similique. Qui expedita quia laboriosam mollitia.",
          date: "10/27/2021",
        },
        {
          id: "3e743087-9d62-1146-ebd2-c0eb57bce3f5",
          title:
            "Consequatur est aut fugiat labore assumenda voluptatum sint ut et.",
          body: "Placeat perspiciatis itaque. Minus cupiditate quasi rerum quas maxime esse nihil facere reprehenderit. Qui eligendi aut similique sint numquam ullam nesciunt et.",
          date: "01/21/2021",
        },
        {
          id: "716a9146-0948-1347-2564-f336f64b8b70",
          title: "Sed quos optio ducimus sint sed.",
          body: "Qui aut nulla autem ipsum. Suscipit in itaque accusamus exercitationem placeat. Commodi delectus est explicabo ullam illo eum ex dolores. Nihil laborum rerum quod.",
          date: "11/27/2021",
        },
        {
          id: "eb4da1eb-6043-db36-0761-079db5721cc8",
          title: "Nihil esse aut eaque amet.",
          body: "Cumque possimus dolores. Aut unde nisi. Sint ullam omnis omnis aut corporis veniam occaecati et nihil. Ullam animi beatae dicta eos pariatur sit nemo. Fugiat quia ducimus sed consequuntur architecto impedit. Rem blanditiis tenetur nisi.",
          date: "05/04/2021",
        },
        {
          id: "99fe89f8-cda5-9e45-c543-6d0d4005b5c2",
          title: "Iusto molestias voluptatum recusandae.",
          body: "Labore temporibus impedit perspiciatis vitae. Est tempore molestiae possimus explicabo iste nobis sed reprehenderit. Reiciendis illo quae vero impedit sit quia cumque. Illo pariatur vitae corporis rerum. Voluptates fuga aut molestiae aliquam ipsum error et veniam quod. Asperiores saepe dicta dicta laboriosam fugit dolorem porro.",
          date: "06/15/2021",
        },
        {
          id: "79c81036-0c62-9ef8-6de7-3db630b9e5da",
          title: "Veritatis numquam esse et qui ut.",
          body: "Sunt quaerat tempora sunt nihil incidunt cum necessitatibus. Quas repellat in assumenda autem explicabo eos tenetur mollitia voluptatem. Quod earum facere possimus eius omnis illo qui. Necessitatibus vitae quidem asperiores nobis aut illo reiciendis.",
          date: "04/18/2021",
        },
        {
          id: "1b606afb-527e-b31a-9dfd-d9e6eacc6f39",
          title: "Optio aperiam quis possimus quos.",
          body: "Occaecati occaecati suscipit consequatur eum omnis dolorum atque fuga ipsum. Quia dolore laboriosam dolores optio non. Officia quae magni tempora. Maiores ea dolorem praesentium eligendi et. Iusto deserunt laudantium voluptas.",
          date: "10/01/2021",
        },
        {
          id: "c770aca2-272a-2fe4-dd39-1dabc4e7b45e",
          title: "Et similique totam dolorem aut alias quas dolorem et.",
          body: "Quia dolores exercitationem unde sapiente itaque enim qui earum deserunt. Corporis voluptates quos quia. Deserunt alias qui quis veritatis alias. Deleniti exercitationem recusandae.",
          date: "11/29/2021",
        },
        {
          id: "fa9cd769-6c2e-4955-2b7b-74c2f5d32339",
          title:
            "Illo assumenda sit voluptatem dolores porro aut quos dolorem.",
          body: "Modi expedita consequuntur voluptatum voluptas sed voluptatem omnis. Cupiditate ad in. Dolor dicta est. In sequi laudantium et blanditiis deserunt nobis. Dolorem aut quam omnis facilis possimus voluptas reiciendis.",
          date: "04/29/2021",
        },
      ],
    };
  },

  watch: {
    menuClicked() {
      document.querySelector(".sidenav").classList.toggle("show");
    },
  },
};
</script>
<style scoped>
.blog {
  background: #001528 !important;
  height: 100vh;
  width: 100%;
  @apply font-lato block md:flex md:justify-between;
}
h1 {
  @apply text-2xl sm:text-4xl md:text-7xl font-black;
}
.sidenav {
  @apply hidden md:block absolute top-0 bottom-0 left-0 md:static;
  height: 100vh;
  width: 9.188rem;
}
.sidenav.show {
  @apply block;
}
.menuBtn {
  @apply block md:hidden absolute right-5 top-5;
}
main {
  width: 100vw;
  @apply pt-20;
}
@media (min-width: 768px) {
  main {
    width: calc(100vw - 9.2rem);
  }
}
</style>
