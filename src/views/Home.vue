<script setup>
import Title from '../components/Title.vue'
</script>

<template>
  <main>
    <Title msg="User Roles Management"/>
    <div class="active-bar">
      <SearchBar :search="search" />
      <Filter v-model="activeFilter" />
      <button class="btn btn-primary"><a href="/add-edit">Create New Role</a></button>
    </div>
    
   
    <div class="container">
      <Card v-for="post in filteredList" :post="post" :key="post.title" />
    </div>
  </main>
</template>


<script>
import { useSearchStore } from '@/stores/search';
import { useFiltersStore } from '@/stores/filters';
import SearchBar from "@/components/SearchBar.vue";
import Card from "@/components/Card.vue";
import Filter from "@/components/Filter.vue";

export default {
  components: {
    SearchBar,
    Card
  },
  computed: {
    filteredList() {
      const searchQuery = useSearchStore().query;
      const filtersStore = useFiltersStore();

      return this.postList.filter(post =>
        post.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (filtersStore.activeFilter === 'all' || (filtersStore.activeFilter === 'active' && post.active) || (filtersStore.activeFilter === 'inactive' && !post.active))
      );
    }
  },
  
  data() {
    return {
      postList: [
      {
        "id": 1,
        "name": "Super Admin",
        "type": "admin",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "editable": false,
        "active": true,
        "users": [
          {
            "id": 1,
            "first_name": "Jason",
            "last_name": "Mossburg",
            "photo_url": "http://placekitten.com/60/60"
          },
          {
            "id": 2,
            "first_name": "Bill",
            "last_name": "Hayes",
            "photo_url": "http://placekitten.com/60/60"
          }
        ],
        "created_on": "2019-01-18T18:25:43.511Z",
        "modified_on": "2019-01-18T18:25:43.511Z"
      },
      {
        "id": 2,
        "name": "Company Admin",
        "type": "admin",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "editable": false,
        "active": true,
        "users": [
          {
            "id": 5,
            "first_name": "Doug",
            "last_name": "Tutt",
            "photo_url": "http://placekitten.com/60/60"
          }
        ],
        "created_on": "2019-01-18T18:25:43.511Z",
        "modified_on": "2019-01-18T18:25:43.511Z"
      },
      {
        "id": 3,
        "name": "Property Admin",
        "type": "admin",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "editable": false,
        "active": false,
        "users": [
          {
            "id": 6,
            "first_name": "Sarah",
            "last_name": "Jane",
            "photo_url": "http://placekitten.com/60/60"
          },
          {
            "id": 7,
            "first_name": "Adrian",
            "last_name": "Davis",
            "photo_url": "http://placekitten.com/60/60"
          },
          {
            "id": 8,
            "first_name": "Conrad",
            "last_name": "Nguyen",
            "photo_url": "http://placekitten.com/60/60"
          },
          {
            "id": 9,
            "first_name": "Kevin",
            "last_name": "McSweeney",
            "photo_url": "http://placekitten.com/60/60"
          }
        ],
        "created_on": "2019-01-18T18:25:43.511Z",
        "modified_on": "2019-01-18T18:25:43.511Z"
      },
      {
        "id": 4,
        "name": "Job Recruiter",
        "type": "job_admin",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "editable": true,
        "active": true,
        "users": [
          {
            "id": 2,
            "first_name": "Bill",
            "last_name": "Hayes",
            "photo_url": "http://placekitten.com/60/60"
          },
          {
            "id": 4,
            "first_name": "Ron",
            "last_name": "Mitchell",
            "photo_url": "http://placekitten.com/60/60"
          },
          {
            "id": 6,
            "first_name": "Sarah",
            "last_name": "Jane",
            "photo_url": "http://placekitten.com/60/60"
          }
        ],
        "created_on": "2019-01-18T18:25:43.511Z",
        "modified_on": "2019-01-18T18:25:43.511Z"
      },
      {
        "id": 5,
        "name": "Content Administrator",
        "type": "admin",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "editable": true,
        "active": true,
        "users": [
          {
            "id": 1,
            "first_name": "Jason",
            "last_name": "Mossburg",
            "photo_url": "http://placekitten.com/60/60"
          },
          {
            "id": 3,
            "first_name": "Nathan",
            "last_name": "Norman",
            "photo_url": "http://placekitten.com/60/60"
          },
          {
            "id": 5,
            "first_name": "Doug",
            "last_name": "Tutt",
            "photo_url": "http://placekitten.com/60/60"
          }
        ],
        "created_on": "2019-01-18T18:25:43.511Z",
        "modified_on": "2019-01-18T18:25:43.511Z"
      },
      {
        "id": 6,
        "name": "Property Moderator",
        "type": "admin",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "editable": false,
        "active": true,
        "users": [
          {
            "id": 7,
            "first_name": "Adrian",
            "last_name": "Davis",
            "photo_url": "http://placekitten.com/60/60"
          },
          {
            "id": 8,
            "first_name": "Conrad",
            "last_name": "Nguyen",
            "photo_url": "http://placekitten.com/60/60"
          },
          {
            "id": 9,
            "first_name": "Kevin",
            "last_name": "McSweeney",
            "photo_url": "http://placekitten.com/60/60"
          }
        ],
        "created_on": "2019-01-18T18:25:43.511Z",
        "modified_on": "2019-01-18T18:25:43.511Z"
      }
    ]
    };
  }
};
</script>

<style scoped>
.container{
  display: flex;
  flex-wrap: wrap;
}
.active-bar{
  display: flex;
}
.btn{
  color: #fff;
  text-transform: uppercase;
  float:right;
  background: #3eb8c7;
  border:none;
  border-radius: 5px;
  padding: 0.6rem 1rem;
    margin: 0;
    height: 40px;
    margin-left: auto;
  order: 2;
  color:#fff !important;
}
a{color:#fff}
</style>