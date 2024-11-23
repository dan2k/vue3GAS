<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1>home</h1>
    <form @submit.prevent="addUser">
      <div class="mb-3">
        <label for="fname" class="form-label">ชื่อตัว</label>
        <input
          type="text"
          class="form-control"
          id="fname"
          v-model="fname"
          aria-describedby="fnameHelp"
          :disabled="isDisabled"
        />
        <div id="fnameHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="lname" class="form-label">นามสกุล</label>
        <input
          type="lname"
          v-model="lname"
          class="form-control"
          id="lname"
          :disabled="isDisabled"
          aria-describedby="lnameHelp"
        />
        <div id="lnameHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <button type="submit" class="btn btn-primary" :disabled="isDisabled">Submit</button>
    </form>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRun } from "../composables/util";
import { useAlert } from "../composables/alertService";
import { isLoading,message } from "../router";

const fname = ref("");
const lname = ref("");
const isDisabled=ref(false);
const { showAlert, showConfirm } = useAlert();
const addUser = () => {
  showConfirm(
    "แจ้งเตือน",
    "คุณต้องการบันทึกข้อมูลหรือไม่",
    async () => {
      let data = {};
      data.fname = fname.value;
      data.lname = lname.value;
      isDisabled.value=true;
      message.value='กำลังประมวลผล.......';
      isLoading.value=true;
      await useRun("addUser", () => {
        showAlert('แจ้งเตือน','บันทึกข้อมูลเรียบร้อยแล้ว','success');
        fname.value='';
        lname.value='';
        isDisabled.value=false;
        isLoading.value=false;
      }, data);
    },
    {}
  );
};
</script>
