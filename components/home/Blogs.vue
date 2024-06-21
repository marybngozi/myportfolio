<template>
  <section class="relative px-5 md:px-7">
    <div class="flex flex-col-reverse md:flex-row flex-wrap justify-between">
      <BlogCard
        v-for="(blog, i) in blogs"
        :blog="blog"
        :key="i"
        :bColor="colors[blog.tag]"
        class="mb-7 w-3/3 sm:w-10/12 sm:mx-auto sm:mb-12 md:mx-0 md:w-1/2 xl:w-1/3"
      />
    </div>

    <div class="flex justify-end">
      <nuxt-link to="/blog" class="button"> Read more articles... </nuxt-link>
    </div>

    <div class="fake-big"></div>
  </section>
</template>

<script>
export default {
  name: "HomeBlogs",

  data() {
    return {
      colors: {
        life: "#EC1010",
        tech: "#105BEC",
        muse: "#E7EC10",
      },

      blogs: [
        {
          id: "2c39d34c-a8d4-70c2-9f56-2044effd7caa",
          tag: "life",
          title:
            "Minus blanditiis omnis mollitia numquam quaerat veniam dolores vel reiciendis.",
          body: "Quo quam unde necessitatibus et. Consequatur ut quia nemo sed id qui quibusdam. Molestiae et vel autem culpa illo ex sunt doloribus. Doloremque illo rem deleniti aspernatur voluptas quis ea est.",
          date: "04/01/2021",
        },
        {
          id: "158ef5b6-6c32-edf1-8aa5-b869468e7987",
          tag: "tech",
          title:
            "Tempore odit cum distinctio placeat voluptate recusandae autem.",
          body: "Sit sit voluptatem neque aliquam minima aut. Accusantium iste hic. Eaque distinctio aut id.",
          date: "12/03/2021",
        },
        {
          id: "03eee517-3ec4-fbf7-fc01-fc1aeef04011",
          tag: "muse",
          title: "Et eos consectetur.",
          body: "Veritatis labore dolor labore quia vel iusto vel autem iste. Deleniti iure itaque eveniet dolores cumque. Omnis facilis repellat. Assumenda ad ut officiis dolores est voluptas voluptas quam rerum. Qui animi voluptatum.",
          date: "12/25/2021",
        },
        {
          id: "e96bad78-1144-4d02-1445-20573ebe00f2",
          tag: "tech",
          title: "Quia quis et quibusdam esse repellat adipisci.",
          body: "Cum omnis eos est officiis. Ut reiciendis labore et esse aspernatur quam eaque aut enim. Est deserunt sequi voluptas. Reprehenderit et corrupti repellendus. Ut fugit fugit explicabo temporibus harum omnis molestiae. Sunt dolor pariatur minima.",
          date: "04/27/2021",
        },
        {
          id: "7b3335ad-6a89-c9c7-5b76-92de5b88e9bb",
          tag: "tech",
          title: "Tempore nam quidem voluptatibus nesciunt ut.",
          body: "Sint rerum tenetur qui aperiam quibusdam tempore commodi quidem sunt. Harum consequuntur rerum similique illo itaque omnis nemo possimus ad. Velit qui commodi rerum sapiente.",
          date: "09/06/2021",
        },
        {
          id: "ee241c83-b43a-f898-f49d-83af6f3ebaa4",
          tag: "muse",
          title: "Deserunt perspiciatis velit debitis non quia ea.",
          body: "Neque optio sequi est qui distinctio ut. Ut voluptatem pariatur non adipisci velit. Deleniti et ex a delectus.",
          date: "08/12/2021",
        },
        {
          id: "5cde7291-8bfa-313a-3130-ec7d84f0815a",
          tag: "life",
          title: "Voluptatum dolores quod maxime culpa aut.",
          body: "Sunt magnam voluptatem sit odio est reiciendis dolorem. Laudantium ad similique. Qui expedita quia laboriosam mollitia.",
          date: "10/27/2021",
        },
        {
          id: "3e743087-9d62-1146-ebd2-c0eb57bce3f5",
          tag: "tech",
          title:
            "Consequatur est aut fugiat labore assumenda voluptatum sint ut et.",
          body: "Placeat perspiciatis itaque. Minus cupiditate quasi rerum quas maxime esse nihil facere reprehenderit. Qui eligendi aut similique sint numquam ullam nesciunt et.",
          date: "01/21/2021",
        },
      ],
    };
  },

  mounted() {
    document.querySelector(".fake-big").style.zIndex = -99;
  },
};
</script>
<style scoped>
section {
  z-index: 3;
}
p {
  @apply text-white text-sm md:text-base mt-3 tracking-wide;
  z-index: 10;
}
.button {
  @apply pr-6 py-2.5 bg-transparent text-lemon font-medium text-base leading-tight hover:underline focus:underline focus:outline-none focus:ring-0 transition duration-150 ease-in-out;
}
.fake-big::after {
  content: "Blog";
  z-index: 0;
}
.fake-big {
  display: inline;
  width: 80%;
  font-weight: 900;
  z-index: -2000;
  position: absolute;
  top: -9.6rem;
  left: 0;
  color: #11202d;
  opacity: 0.5;
}
@media (max-width: 321px) {
  .fake-big {
    font-size: 8.9rem;
  }
}
/* No less than 322px, no greater than 360px */
@media (min-width: 322px) and (max-width: 360px) {
  .fake-big {
    font-size: 10rem;
  }
}
@media (min-width: 361px) and (max-width: 499px) {
  .fake-big {
    top: -11.4rem;
    font-size: 11rem;
  }
}
@media (min-width: 500px) and (max-width: 600px) {
  .fake-big {
    top: -13rem;
    font-size: 13.2rem;
  }
}
@media (min-width: 601px) and (max-width: 767px) {
  .fake-big {
    top: -14rem;
    font-size: 15rem;
  }
}
@media (min-width: 768px) and (max-width: 799px) {
  .fake-big {
    top: -16rem;
    font-size: 16rem;
  }
}
@media (min-width: 800px) and (max-width: 900px) {
  .fake-big {
    top: -17rem;
    font-size: 16.5rem;
  }
}
@media (min-width: 901px) and (max-width: 1024px) {
  .fake-big {
    top: -16rem;
    font-size: 16rem;
  }
}
@media (min-width: 1025px) {
  .fake-big {
    top: -15rem;
    z-index: -2000;
    font-size: 20rem;
  }
}
</style>
