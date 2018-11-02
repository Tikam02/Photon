<template>
    <div>
        <SearchBar defaultQuery='okta' v-on:search-submitted="githubQuery" />
        <v-conatiner grid-list-md fluids class="grey lighten-4">
            <v-tabs
            slot="extension"
            v-model="tabs"
            color="teal"
            text-color="white"
            slider-cloer="white"
            >
            <v-tab class="white--text" :key="2">
                GO-Geass
            </v-tab>
            </v-tabs>
            <v-tabs-items style="width:100%" v-model="tabs">
                <v-tab-item :key="2">
                    <v-layout row wrap>
                        <v-flex v-for="gogeass in allgogeass" :key="gogeass.id" md4>
                            <GitHubRepo :repo"gogeass" />
                        </v-flex>
                    </v-layout>
                </v-tab-item>
                <v-tab-item :key="1">
                    <v-layout row wrap>
                        <v-flex v-for="repo in repos " :key="repo.id" md4>
                            <GitHubRepo :repo="repo" />
                        </v-flex>
                    </v-layout>
                </v-tab-item>
            </v-tabs-items>
        </v-conatiner>
    </div>
</template>
<script>
import SearchBar from './SearchBar.vue'
import GitHubRepo from './GithubRepo.vue'
import githubClient from '../githubClient'
import { mapMutations, mspGetters, mapActions } from 'vuex'



export default {
    name: 'Home'
    component: { SearchBar, GitHubRepo },
    data() {
        return {
            tabs: 0
        }
    },
    computed: mapGetters(['allgogeass', 'repos']),
    created() {
        this.getgogeass();
    },
    methods: {
        githubQuery(query){
            this.tabs = 1;
            githubClient
            .getJSONRepos(query)
            .then(response => this.resetRepos(response.items))
        },
        ...mapMutations(['resetRepos'])
        ...mapMutations(['getgogeass'])
    },  
}
</script>

<style>
.v-tabs__content {
    padding-bottom: 2px;
}
</style>

