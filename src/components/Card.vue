<template>
  <div class="card">
    <div class="header">
      <div v-if="!post.active" class="inactive" >Inactive</div>
    </div>
    <div class="body">
      <h3>{{ post.name }}</h3>
      <h4>{{ post.type }}</h4>
      <p class="description">{{ post.description }}</p>
      <div class="images">
        <div v-for="user in post.users" :post="post.users" :key="post.users.id">
          <img :src="user.photo_url" />
        </div>
      </div>
    </div>
    <div class="footer">

      <p>Last Update: {{ post.modified_on.slice(0, -14)}} 
         
        <IconLock v-if="!post.editable" class="lock"></IconLock>
        <span class="edit-delete" v-else>
          <span>Edit</span>
          <span style="color:red">Delete</span>
        </span>
      </p>
     
    </div>
  </div>
 
</template>

<script>
import IconLock from "@/components/icons/IconLock.vue";
export default {
  components: {
    IconLock,
  },
  props: {
    post: Object
  }
};
</script>

<style scoped>
.card{
  margin: 2rem 1rem;
  border:1px solid #ddd;
  border-radius: 5px;
  flex-grow: 1;
  width: 25%;  
  row-gap: 1.5rem;
  position: relative;
}

.header{
  height: 100px;  
  padding: 2rem 2rem 0 0;
}

.body{
  padding: 0 2rem 2rem 2rem;
}


.inactive{
  padding: 0.4rem 0.8rem ;
  background: #f25454;
  text-transform: uppercase;
  color: #fff;
  margin-bottom:2rem;
  border-radius: 5px;
  margin-left: auto;
  order: 2;
  width: 33%;
  text-align: center;
}

.images{
  display: flex;
  width: 25%;  
}

img{
  margin-top: 1rem;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.description{
  margin-top: 2rem;
}

h3{
  font-weight: 500;
}

.footer{
  bottom: 0;
  border-top: 1px solid #ddd;
  padding: 1rem;
  font-size: 1rem;
  background: #f5f4f4;
  color:#959e9b;
  text-transform: uppercase;
}

.edit-delete span{
  margin-left: 1rem;
}
.edit-delete span{
  padding: 0rem;
}
.lock{
  float: right;
}
</style>
