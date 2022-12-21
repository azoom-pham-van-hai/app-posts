<template>
  <div class="create-user">
    <h1>Create User</h1>
    <div class="form">
      <div class="part1">
        <app-input
          :value="name"
          placeholder="Enter user's name"
          name="name"
          label="Name *"
          @input="handleChangeName"
        />
        <div class="error" v-if="!$v.name.required && $v.name.$dirty">
          Name is required
        </div>
        <div
          class="error"
          v-if="$v.name.required && !$v.name.minLength && $v.name.$dirty"
        >
          Name has at least 4 characters
        </div>

        <app-input
          :value="dob"
          placeholder="Enter user's date of birth"
          name="dob"
          label="Date Of Birth *"
          typeInput="date"
          @input="handleChangeDob"
        />
        <div class="error" v-if="$v.dob.$error">DOB is required</div>

        <app-input
          :value="address"
          placeholder="Enter user's address"
          name="Address"
          label="Address *"
          @input="handleChangeAddress"
        />
        <div class="error" v-if="$v.address.$error">Address is required</div>

        <app-input
          :value="phone"
          placeholder="Enter user's phone"
          name="phone"
          label="Phone Number *"
          @input="handleChangePhone"
        />
        <div class="error" v-if="!$v.phone.required && $v.phone.$dirty">
          Phone number is required
        </div>
        <div
          class="error"
          v-if="$v.phone.required && !$v.phone.onlyNumber && $v.phone.$dirty"
        >
          Invalid phone number
        </div>
        <div
          class="error"
          v-if="
            $v.phone.required &&
            $v.phone.onlyNumber &&
            !$v.phone.maxLength &&
            $v.phone.$dirty
          "
        >
          Phone number has maximum 11 characters
        </div>
      </div>

      <div class="part2">
        <app-input
          :value="email"
          placeholder="Enter user's email"
          name="email"
          label="Email *"
          @input="handleChangeEmail"
        />
        <div class="error" v-if="!$v.email.required && $v.email.$dirty">
          Email is required
        </div>
        <div
          class="error"
          v-if="$v.email.required && !$v.email.email && $v.email.$dirty"
        >
          Invalid email
        </div>

        <app-input
          :value="password"
          placeholder="Enter user's password"
          name="password"
          label="Password *"
          typeInput="password"
          @input="handleChangePassword"
        />
        <div class="error" v-if="!$v.password.required && $v.password.$dirty">
          Password is required
        </div>
        <div
          class="error"
          v-if="
            $v.password.required &&
            (!$v.password.minLength ||
              !$v.password.oneUppercase ||
              !$v.password.specialCharacter) &&
            $v.password.$dirty
          "
        >
          Password has at least 6 characters, includes at least 1 uppercase and
          1 special character
        </div>

        <label for="gender" class="label">Gender</label>
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

        <app-input
          :value="graduatedDate"
          placeholder="Enter user's graduated date"
          name="graduatedDate"
          label="Graduation Date"
          typeInput="date"
          @input="handleChangeGraduationDate"
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
import AppInput from "../components/app/CommonInput.vue";

export default {
  components: {
    AppButton,
    AppInput,
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

    handleChangeName(e) {
      this.$v.name.$touch();
      this.name = e;
    },
    handleChangeAddress(e) {
      this.$v.address.$touch();
      this.address = e;
    },
    handleChangePhone(e) {
      this.$v.phone.$touch();
      this.phone = e;
    },
    handleChangeEmail(e) {
      this.$v.email.$touch();
      this.email = e;
    },
    handleChangePassword(e) {
      this.$v.password.$touch();
      this.password = e;
    },
    handleChangeDob(e) {
      this.$v.dob.$touch();
      this.dob = e;
    },
    handleChangeGraduationDate(e) {
      this.$v.graduatedDate.$touch();
      this.graduatedDate = e;
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
  > .form > .part1,
  > .form > .part2 {
    flex-basis: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 20px;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  > .form > .part2 > .label {
    margin-bottom: -10px;
    text-align: left;
  }

  .select {
    padding: 5px 20px;
    border-radius: 5px;
    outline: none;
    height: 56px;
    border: 1px solid #dba39a;
  }
}

.error {
  color: red;
  text-align: left;
}
</style>
