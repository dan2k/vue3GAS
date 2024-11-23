<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <form novalidate @submit.prevent="onSubmit">
      <div class="row g-3 align-items-center">
        <div class="col-12 col-md-6">
          <InputBox
            id="username"
            name="username"
            label="ชื่อ"
            placeholder="ระบุชื่อ"
            class="form-control-sm"
          />
        </div>
        <div class="col-12 col-md-6">
          <InputBox
            id="email"
            name="email"
            label="Email"
            type="email"
            placeholder="ระบุ email"
            class="form-control-sm"
          />
        </div>
        <div class="col-12 col-md-6">
          <InputBox
            id="password"
            name="password"
            label="รหัสผ่าน"
            type="password"
            placeholder="ระบุรหัสผ่าน"
            class="form-control-sm"
          />
        </div>
        <div class="col-12 col-md-6">
          <MoneyBox
            id="money"
            name="money"
            label="จำนวนเงิน"
            placeholder=""
            class="form-control-sm"
          />
        </div>
        <div class="col-12 col-md-6">
          <DateBox
            id="date"
            name="date"
            label="วันที่"
            placeholder="ระบุวันที่"
            :format="format"
            class="form-control-sm"
          />
        </div>
        <div class="col-12 col-md-6 pl-3 pr-3">
          <SelectBox
            id="typecost"
            name="typecost"
            label="ประเภท"
            :options="options"
            class="form-select form-select-sm "
          />
        </div>
      </div>

      <button type="submit" class="btn btn-primary mt-3">ตกลง</button>
      <pre>{{ errors }}</pre>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import InputBox from "../components/InputBox.vue";
import DateBox from "../components/dateBox.vue";
import MoneyBox from "../components/MoneyBox.vue";
import SelectBox from "../components/SelectBox.vue";
import { useForm } from "vee-validate";
import * as yup from "yup";
const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
const options = ref([
  { id: 1, label: "Option 1" },
  { id: 2, label: "Option 2" },
  { id: 3, label: "Option 3" },
]);
// สร้าง Schema สำหรับการ Validate
const schema = yup.object({
  username: yup.string().required("กรุณาระบุชื่อ"),
  email: yup.string().email("Invalid email").required("กรุณาระบุ Email"),
  password: yup.string().required("กรุณาระบุรหัสผ่าน"),
  date: yup.date().required("กรุณาระบุวันที่"),
  money: yup.string().required("กรุณาระบุจำนวนเงิน"),
  typecost: yup.string().required("กรุณาระบุประเภท"),
});

// ใช้งาน useForm
const { handleSubmit, resetForm, errors } = useForm({
  validationSchema: schema,
  initialValues: {
    typecost: null, // กำหนดค่าเริ่มต้น
    money:null,
  },
});

// ฟังก์ชันเมื่อ Submit
const onSubmit = handleSubmit((values) => {
  console.log(values);
  alert("Form Submitted: " + JSON.stringify(values));
  resetForm();
});
</script>

<style scoped>

</style>
