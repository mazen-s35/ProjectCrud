<template>
  <div id="wrapper">
    <div class="container mt-3">
      <div class="col">
        <div class="row">
          <p class="h3 text-success fw-bold">
            Contact Manager
            <router-link to="/contacts/add" class="btn btn-success btn-sm">
              <i class="fa fa-plus-circle" /> New
            </router-link>
          </p>
          <p class="fst-italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illum vero earum quaerat ad hic, sint voluptatibus ipsam tempore optio? Quo quas reiciendis corporis dicta nulla necessitatibus! Sapiente, ullam maxime.
          </p>
          <form>
            <div class="row">
              <div class="col-md-6">
                <div class="row">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="Search Name">
                  </div>
                  <div class="col">
                    <input type="submit" class="btn btn-outline-dark">
                  </div>
                </div>
              </div>
            </div>
          </form>
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
    <!-- Make A Card -->
    <div class="container mt-3" v-if="contacts.length > 0">
      <div class="row">
        <div class="col-md-6" v-for="contact of contacts" :key="contact">
          <div class="card my-2 list-group-item-success shadow-lg">
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col-sm-4">
                  <img :src="contact.photo" class="contact-image" alt="">
                </div>
                <div class="col-sm-7">
                  <ul class="list-group">
                    <li class="list-group-item">
                      Name: <span class="fw-bold"> {{contact.name}}</span>
                    </li>
                    <li class="list-group-item">
                      Email: <span class="fw-bold"> {{contact.email}}</span>
                    </li>
                    <li class="list-group-item">
                      Mobile: <span class="fw-bold"> {{contact.mobile}}</span>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                  <router-link :to="`/contacts/view/${contact.id}`" class="btn btn-warning my-1">
                    <i class="fa fa-eye" />
                  </router-link>
                  <router-link :to="`/contacts/edit/${contact.id}`" class="btn btn-primary my-1">
                    <i class="fa fa-pen" />
                  </router-link>
                  <button class="btn btn-danger my-1" @click="clickDeleteContact(contact.id)">
                    <i class="fa fa-trash" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Make A Card -->
  </div>
</template>

<script>
import { ContactServer } from '@/server/contactServer'
import Spinner from '../components/Spinner.vue'
export default {
    data: function () {
        return {
            loading: false,
            contacts: [],
            errorMessage: null
        };
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await ContactServer.getAllContacts();
            this.contacts = response.data;
            this.loading = false;
        }
        catch (error) {
            this.errorMessage = error;
            this.loading = false;
        }
    },
    methods: {
      clickDeleteContact: async function(contactId) {
        try {
          this.loading = true
          let response = await ContactServer.deleteContact(contactId)
        if(response) {
            let response = await ContactServer.getAllContacts();
            this.contacts = response.data;
            this.loading = false;
        }
      }
      catch (error) {
        this.errorMessage = error;
        this.loading = false;
      }
        }
    },
    components: { Spinner }
}
</script>

<style>
.contact-image {
  width: 150px;
  border-radius: 50%;
}
</style>