<template>
  <div id="wrapper">
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">Add Contact</p>
          <p class="fst-italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam eligendi unde soluta expedita mollitia placeat officiis, hic, voluptatem consectetur repudiandae illum voluptatibus delectus perspiciatis adipisci laudantium. Impedit alias voluptate aspernatur.</p>
        </div>
      </div>
    </div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-4">
          <form @submit.prevent="submitCreate()">
            <div class="mb-2">
              <input required type="text" v-model="contact.name" class="form-control" placeholder="Name">
            </div>
            <div class="mb-2">
              <input type="text" v-model="contact.photo" class="form-control" placeholder="Phot URL">
            </div>
            <div class="mb-2">
              <input type="email" v-model="contact.email" class="form-control" placeholder="Email">
            </div>
            <div class="mb-2">
              <input type="number" v-model="contact.mobile" class="form-control" placeholder="Mobile">
            </div>
            <div class="mb-2">
              <input type="text" v-model="contact.company" class="form-control" placeholder="Company">
            </div>
            <div class="mb-2">
              <input type="text" v-model="contact.title" class="form-control" placeholder="Title">
            </div>
            <div class="mb-2">
              <select v-model="contact.groupId" class="form-control" v-if="groups.length > 0">
                <option value="">Select Groupe</option>
                <option :value="group.id" v-for="group of groups" :key="group.id">{{ group.name }}</option>
              </select>
            </div>
            <div class="mb-2">
              <input type="submit" class="btn btn-success" value="Create">
            </div>
          </form>
        </div>
        <div class="col-md-4">
          <img :src="contact.photo" class="contact-image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ContactServer } from '@/server/contactServer';
export default {
  name: 'AddContent',
  data: function() {
    return {
      contact: {
        name: '',
        photo: '',
        email: '',
        mobile: '',
        company: '',
        title: '',
        groupId: '',
      },
      groups: []
    }
  },
  created: async function () {
    try {
      let response = await ContactServer.getAllGroups()
      this.groups = response.data
    }
    catch(error) {
      console.log(error)
    }
  },
  methods: {
    submitCreate: async function() {
      try {
        let response = await ContactServer.createContact(this.contact)
        if (response) {
          return this.$router.push('/')
        } else {
          return this.$router.push('/contact/add')
        }
      }
      catch (error) {
        console.log(error)
      }
    }
  }
};
</script>
<style></style>
