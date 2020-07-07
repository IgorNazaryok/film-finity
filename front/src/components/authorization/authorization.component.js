import { FfAuthorizationForm, FfAuthorizationConfirmation } from '@components/authorization';

export default {
  name: 'ff-auth-dialog',
  data () {
    return {
      userLogin: false
    };
  },
  components: {
    FfAuthorizationForm,
    FfAuthorizationConfirmation
  },
  methods: {
    handleClose (done) {
      this.userLogin = false;
      this.isComfirmationVisible = false;
      done();
    },
    visible () {
      this.isComfirmationVisible = true;
      this.loginDialogVisible = true;
    }
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
    loginDialogVisible: {
      get: function () {
        return this.$store.state.auth.isLoginVisible;
      },
      set: function () {
        this.$store.dispatch('ChangeLoginVisible');
      }
    },
    isComfirmationVisible: {
      get: function () {
        return this.$store.state.auth.isComfirmationVisible;
      },
      set: function () {
        this.$store.dispatch('ChangeConfirmationVisible');
      }
    },
    titleData: function () {
      if (!this.isLoggedIn) {
        return 'Выполните вход';
      } else {
        return '';
      }
    }
  }
};
