<template>
  <div class="container">
    <div class="row justify-content-md-center align-items-center h-100-vh">
      <form @submit.prevent="onSubmit">
        <div class="form-group text-left">
          <label for="exampleInputEmail1">Username</label>
          <input type="test" class="form-control" v-model="username" aria-describedby="emailHelp">
        </div>
        <div class="form-group text-left">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" v-model="password" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-secondary btn-block">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      onSubmit () {
        const formData = {
          username: this.username,
          password: this.password,
        }
        console.log(formData);
        this.$router.push('/dashboard');
      }
    }
  }
</script>

<style scoped>
  .signin-form {
    width: 400px;
    margin: 30px auto;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: 0 2px 3px #ccc;
  }

  .input {
    margin: 10px auto;
  }

  .input label {
    display: block;
    color: #4e4e4e;
    margin-bottom: 6px;
  }

  .input input {
    font: inherit;
    width: 100%;
    padding: 6px 12px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }

  .input input:focus {
    outline: none;
    border: 1px solid #521751;
    background-color: #eee;
  }

  .submit button {
    border: 1px solid #521751;
    color: #521751;
    padding: 10px 20px;
    font: inherit;
    cursor: pointer;
  }

  .submit button:hover,
  .submit button:active {
    background-color: #521751;
    color: white;
  }

  .submit button[disabled],
  .submit button[disabled]:hover,
  .submit button[disabled]:active {
    border: 1px solid #ccc;
    background-color: transparent;
    color: #ccc;
    cursor: not-allowed;
  }
  .h-100-vh {
    height: 100vh;
  }
</style>