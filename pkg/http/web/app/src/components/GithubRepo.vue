<template>
<v-card>
    <v-card-title primary-title>
        <div class="repo-card-content">
            <h3 class="headline mb-0">
                <router-link :to="{ name: 'repo-details',params: {id: repo.id }}" > {{ repo.full_name }}</router-link>
            </h3>
            <div>{{repo.description}}</div>
            </div>
    </v-card-title>
    <v-card-actions>
        <v-chip>
            {{repo.language}}
        </v-chip>
        <v-spacer></v-spacer>
        <v-btn @click.prevent="toogleGogeass(repo)" flat icon color="pink">
            <v-icon v-if="isGogeass(repo)">favorite</v-icon>
            <v-icon v-else>favorite_border</v-icon>
        </v-btn>
    </v-card-actions>
    </v-card>
    </template>

    <script>
    import { mapActions } from 'vuex';

    export default { 
        data(){
            return {}
        },
        props: ['repo'],
        methods: {
            isGogeass(repo){
                return this.$store.getters.isGogeass(repo);
            },
            ...mapActions(['toggleGogeass'])
        }
    }
    </script>

    <style>
    repo-card-content {
        height: 90px;
        overflow: scroll;
    }
    </style>
    

            