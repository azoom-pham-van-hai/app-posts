<template>
  <div class="create-user">
    <h1>Create User</h1>
    <div class="form">
      <div class="part">
        <label class="label" for="name">Name *</label>
        <input
          v-model.trim.lazy="$v.name.$model"
          id="name"
          class="input"
          placeholder="Enter user's name"
        />
        <div class="error-container">
          <div class="error" v-if="!$v.name.required && $v.name.$dirty">
            Name is required
          </div>
          <div class="error" v-if="!$v.name.minLength && $v.name.$dirty">
            Name has at least 4 characters
          </div>
        </div>

        <label class="label" for="dob">Date of birth *</label>
        <input
          v-model.lazy="$v.dob.$model"
          placeholder="Enter user's date of birth"
          class="input"
          id="dob"
          type="date"
        />
        <div class="error" v-if="$v.dob.$error">Date of birth is required</div>

        <label class="label" for="address">Address *</label>
        <input
          v-model.trim.lazy="$v.address.$model"
          id="address"
          class="input"
          placeholder="Enter user's address"
        />
        <div class="error" v-if="$v.address.$error">Address is required</div>

        <label class="label" for="phone">Phone *</label>
        <input
          v-model.trim.lazy="$v.phone.$model"
          id="phone"
          class="input"
          placeholder="Enter user's phone"
        />
        <div class="error-container">
          <div class="error" v-if="!$v.phone.required && $v.phone.$dirty">
            Phone number is required
          </div>
          <div class="error" v-if="!$v.phone.onlyNumber && $v.phone.$dirty">
            Invalid phone number
          </div>
          <div class="error" v-if="!$v.phone.minLength && $v.phone.$dirty">
            Phone number has at least 10 characters
          </div>
          <div class="error" v-if="!$v.phone.maxLength && $v.phone.$dirty">
            Phone number has maximum 11 characters
          </div>
        </div>
      </div>

      <div class="part">
        <label class="label" for="email">Email *</label>
        <input
          v-model.trim.lazy="$v.email.$model"
          id="email"
          class="input"
          placeholder="Enter user's email"
        />
        <div class="error-container">
          <div class="error" v-if="!$v.email.required && $v.email.$dirty">
            Email is required
          </div>
          <div class="error" v-if="!$v.email.email && $v.email.$dirty">
            Invalid email
          </div>
        </div>

        <label class="label" for="password">Password *</label>
        <input
          v-model.trim.lazy="$v.password.$model"
          id="password"
          class="input"
          type="password"
          placeholder="Enter user's password"
        />
        <div class="error-container">
          <div class="error" v-if="!$v.password.required && $v.password.$dirty">
            Password is required
          </div>
          <div
            class="error"
            v-if="!$v.password.minLength && $v.password.$dirty"
          >
            Password has at least 6 characters
          </div>
          <div
            class="error"
            v-if="!$v.password.oneUppercase && $v.password.$dirty"
          >
            Password has at least one uppercase character
          </div>
          <div
            class="error"
            v-if="!$v.password.specialCharacter && $v.password.$dirty"
          >
            Password has at least one special character
          </div>
        </div>

        <label class="label" for="gender">Gender</label>
        <select
          placeholder="Select user's gender"
          class="select"
          v-model="gender"
          id="gender"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>

        <label class="label" for="graduatedDate">Graduated Date</label>
        <input
          v-model.trim.lazy="$v.graduatedDate.$model"
          id="graduatedDate"
          class="input"
          placeholder="Enter user's graduatedDate"
          type="date"
        />
        <div
          class="error"
          v-if="!$v.graduatedDate.greaterThanDob && $v.graduatedDate.$dirty"
        >
          Graduated date must be greater than Date of birth
        </div>

        <app-button
          type="button"
          :on-click="createUser"
          title="Create"
          :disabled="this.$v.$invalid"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  email,
  maxLength,
} from "vuelidate/lib/validators";
import AppButton from "../components/app/CommonButton.vue";

export default {
  components: {
    AppButton,
  },

  data() {
    return {
      name: "",
      dob: "",
      address: "",
      phone: "",
      email: "",
      graduatedDate: "",
      gender: "others",
      password: "",
      disabledButton: false,
    };
  },

  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    dob: {
      required,
    },
    address: {
      required,
    },
    phone: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(11),
      onlyNumber: function (value) {
        return !/[^0-9]+/g.test(value);
      },
    },
    email: {
      required,
      email,
    },
    graduatedDate: {
      greaterThanDob: function (value, vm) {
        if (!value || !vm.dob) {
          return true;
        } else {
          return new Date(value.toString()) > new Date(vm.dob.toString());
        }
      },
    },
    password: {
      required,
      minLength: minLength(6),
      oneUppercase: function (value) {
        return /[A-Z]+/g.test(value);
      },
      specialCharacter: function (value) {
        return /[^A-Za-z0-9]+/g.test(value);
      },
    },
  },

  methods: {
    createUser() {
      const info = {
        name: this.name,
        dob: this.dob,
        address: this.address,
        phone: this.phone,
        email: this.email,
        graduatedDate: this.graduatedDate,
        gender: this.gender,
        password: this.password,
      };

      console.log(info);
    },
  },
};
</script>

<style scoped lang="scss">
.create-user {
  background-color: #fefcf3;
  border-radius: 5px;
  padding: 20px;

  > .form {
    display: flex;
    justify-content: space-between;
  }
  > .form > .part {
    flex-basis: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 16px;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  > .form > .part > .input {
    padding: 5px 20px;
    border-radius: 5px;
    outline: none;
    height: 46px;
    border: 1px solid #dba39a;
  }

  > .form > .part > .label {
    margin-bottom: -10px;
    text-align: left;
  }

  > .form > .part > .select {
    padding: 5px 20px;
    border-radius: 5px;
    outline: none;
    height: 56px;
    border: 1px solid #dba39a;
  }
}

.error-container > .error {
  color: red;
  text-align: left;

  &:not(:first-child) {
    display: none;
  }
}
</style>
