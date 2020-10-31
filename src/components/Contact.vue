<template>
  <div class="contact" id="contact">
    <div class="columns contact-container">
      <div class="column is-half contact-pannel is-hidden-touch">
        <div class="pannel-image">
          <div class="pannel-text">
            <h3>ADDRESS</h3>
            <address>
              Visit us at:<br />
              Example.com<br />
              Box 564, Disneyland<br />
              USA
            </address>
            <h3>PHONE</h3>
            <a href="">+91 8921424606</a>
            <h3>EMAIL</h3>
            <a href="">ananthunalloor@gmail.com</a>
          </div>
        </div>
      </div>
      <div class="column contact-form">
        <h1>CONTACT ME</h1>
        <div class="form-container">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input" />
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input is-danger"
                type="email"
                placeholder="Email input"
                value=""
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
            </div>
            <p hidden class="help is-danger" >This email is invalid</p>
          </div>
          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea" placeholder="Textarea"></textarea>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <button class="button is-success">
                <span class="icon is-small">
                  <i class="fas fa-paper-plane"></i>
                </span>
                <span>SEND</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.contact {
  width: 100vw;
  height: auto;
  padding: 10vh 10vw;
  background-image: url("../assets/images/space-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  .contact-container {
    width: 100%;
    height: auto;
    margin: 0;
    .contact-pannel {
      padding: 3% 0% 3% 8%;
      .pannel-image {
        width: 100%;
        height: 100%;
        background-color: blue;
        background-image: url("../assets/images/lionmananad.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center left;
        .pannel-text {
          height: 100%;
          width: 100%;
          background-color: rgba($color: #000000, $alpha: 0.21);
          color: white;
          padding-top: 30%;
          padding-left: 30%;
          address {
            padding-left: 1rem;
          }
          a{
            text-decoration: none;
            color: white;
            padding-left: 1rem;
          }
          h3{
            font-size: 1.1rem;
            padding-top: .5rem;
          }
        }
      }
    }
    .contact-form {
      height: 100%;
      background-color: #07020d;
      box-shadow: -10px 10px 50px black;
      h1 {
        color: white;
        font-size: 2rem;
        text-align: center;
        padding: 0.5rem;
      }
      .form-container {
        padding: 15% 10%;
        label {
          color: white;
          font-weight: 300;
        }
        button {
          float: right;
        }
      }
    }
  }
}
</style>
