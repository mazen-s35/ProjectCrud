import axios from "axios";
import { Static } from "vue";

export class ContactServer {
    static serverURL = `http://localhost:3000`;

    static getAllContacts() {
        let dataUrl = `${this.serverURL}/contacts`;
        return axios.get(dataUrl);
    }

    static getContact(contactId) {
        let dataUrl = `${this.serverURL}/contacts/${contactId}`;
        return axios.get(dataUrl);
    }

    static createContact(contact) {
        let dataUrl = `${this.serverURL}/contacts/`;
        return axios.post(dataUrl, contact);
    }

    static updateContact(contact, contactId) {
        let dataUrl = `${this.serverURL}/contacts/${contactId}`;
        return axios.put(dataUrl, contact);
    }

    static deleteContact(contactId) {
        let dataUrl = `${this.serverURL}/contacts/${contactId}`;
        return axios.delete(dataUrl);
    }

    static getAllGroups() {
        let dataUrl = `${this.serverURL}/groups/`;
        return axios.get(dataUrl);
    }

    static getGroup(contact) {
        let groupId = contact.groupId;
        let dataUrl = `${this.serverURL}/groups/${groupId}`;
        return axios.get(dataUrl);
    }
}