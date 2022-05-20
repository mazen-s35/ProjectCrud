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
    <!-- Loading Page -->
    <div v-if="loading">
      <div class="container">
        <div class="row">
          <div class="col">
            <Spinner />
          </div>
        </div>
      </div>
    </div>
    <!-- Loading Page -->
    <!-- If Error -->
    <div v-if="!loading && errorMessage">
      <div class="container">
        <div class="row">
          <div class="col">
            <p class="h3 text-danger fw-bold">{{ errorMessage }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- If Error -->
    <div class="container mt-3" v-if="!loading && idDone()">
      <div class="row align-items-center">
        <div class="col-md-4">
          <img :src="contact.photo" class="contact-image-big" alt="">
        </div>
        <div class="col-md-6">
          <ul class="list-group">
            <li class="list-group-item">Name: <span class="fw-bold"> {{ contact.name }}</span></li>
            <li class="list-group-item">Email: <span class="fw-bold"> {{ contact.email }}</span></li>
            <li class="list-group-item">Mobile: <span class="fw-bold"> {{ contact.mobile }}</span></li>
            <li class="list-group-item">Compony: <span class="fw-bold"> {{ contact.company }}</span></li>
            <li class="list-group-item">Title: <span class="fw-bold"> {{ contact.title }}</span></li>
            <li class="list-group-item">Groupe: <span class="fw-bold"> {{ group.name }}</span></li>
          </ul>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <router-link to="/" class="btn btn-success"><i class="fa fa-arrow-alt-circle-left"></i> Back</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ContactServer } from '@/server/contactServer'
import Spinner from '@/components/Spinner.vue'
export default {
    name: "ViewContent",
    data: function () {
        return {
            contactId: this.$route.params.contactId,
            contact: {},
            loading: false,
            errorMassage: null,
            group: {}
        };
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await ContactServer.getContact(this.contactId);
            let groupRes = await ContactServer.getGroup(response.data);
            this.contact = response.data;
            this.group = groupRes.data;
            this.loading = false;
        }
        catch (error) {
            this.errorMassage = error;
            this.loading = false;
        }
    },
    components: { Spinner },
    methods: {
      idDone: function () {
      return Object.keys(this.contact).length > 0 && Object.keys(this.group).length > 0
    }
    }
}
</script>

<style>
.contact-image-big {
  width: 200px;
  border-radius: 50%;
}
</style>