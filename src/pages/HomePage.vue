<template>
  <div class="component container-fluid">
    <div class="row">
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col">
        <Results />
      </div>
      <div class="col">
        <Details />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { moviesService } from "../services/MoviesService";
import Results from "../components/ResultsComponent";
import Details from "../components/DetailsComponent";

export default {
  name: "HomePage",
  setup() {
    const state = reactive({
      query: "",
    });
    return {
      state,
      async search() {
        try {
          await moviesService.getMovies(state.query);
          state.query = "";
        } catch (e) {
          console.error(e);
        }
      },
    };
  },
  components: {
    Results,
    Details,
  },
};
</script>

<style lang="scss" scoped>
</style>