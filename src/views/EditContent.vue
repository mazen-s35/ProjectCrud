<template>
  <div id="wrapper">
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">Edit Contact</p>
          <p class="fst-italic">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam eligendi unde soluta expedita mollitia placeat officiis, hic, voluptatem consectetur repudiandae illum voluptatibus delectus perspiciatis adipisci laudantium. Impedit alias voluptate aspernatur.</p>
        </div>
      </div>
    </div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-md-4">
          <form @submit.prevent="updateSubmit()">
            <div class="mb-2">
              <input v-model="contact.name" type="text" class="form-control" placeholder="Name">
            </div>
            <div class="mb-2">
              <input v-model="contact.photo" type="text" class="form-control" placeholder="Phot URL">
            </div>
            <div class="mb-2">
              <input v-model="contact.email" type="email" class="form-control" placeholder="Email">
            </div>
            <div class="mb-2">
              <input v-model="contact.mobile" type="number" class="form-control" placeholder="Mobile">
            </div>
            <div class="mb-2">
              <input v-model="contact.company" type="text" class="form-control" placeholder="Company">
            </div>
            <div class="mb-2">
              <input v-model="contact.title" type="text" class="form-control" placeholder="Title">
            </div>
            <div class="mb-2">
              <select v-model="contact.groupId" class="form-control" v-if="groups.length > 0">
                <option value="">Select Groupe</option>
                <option :value="group.id" v-for="group of groups" :key="group.id">{{group.name}}</option>
              </select>
            </div>
            <div class="mb-2">
              <input type="submit" class="btn btn-success" value="Update">
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
import { ContactServer } from '@/server/contactServer'
// import { cache } from 'webpack'

export default {
  name: 'EditContent',
  data: function() {
    return {
      contactId: this.$route.params.contactId,
      loading: false,
      contact: {},
      errorMassage: null,
      groups: []
    }
  },
  created: async function() {
    try {
      this.loading = true
      let response = await ContactServer.getContact(this.contactId)
      let groupsResponse = await ContactServer.getAllGroups()
      this.contact = response.data
      this.groups = groupsResponse.data
      this.loading = false
    }
    catch(error) {
      this.errorMassage = error
      this.loading = false
    }
  },
  methods: { 
    updateSubmit: async function() {
      try {
        let response = await ContactServer.updateContact(this.contact, this.contactId)
        if (response) {
          return this.$router.push('/')
        } else {
          return this.$router.push(`/contact/edit/${this.contactId}`)
        }
      }
      catch (error) {
        console.log(error)
      }
  }
  }
}
</script>

<style>
</style>