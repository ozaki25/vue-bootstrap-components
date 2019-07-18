<template>
  <nav class="navbar" :class="{'navbar-default': nomal}">
    <Container>
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navigation"
          @click="onClick"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" :href="titleLink">{{title}}</a>
      </div>
      <div class="collapse navbar-collapse" :class="{in: isCollapsed}" id="navigation">
        <ul class="nav navbar-nav">
          <li class="active">
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
        </ul>
      </div>
    </Container>
  </nav>
</template>

<script>
import Container from "./Container";

export default {
  name: "Navbar",
  components: {
    Container
  },
  props: {
    title: {
      required: true,
      type: String
    },
    titleLink: {
      type: String,
      default: "#"
    },
    nomal: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    onClick: function() {
      this.isCollapsed = !this.isCollapsed;
    }
  },
  data: function() {
    return {
      isCollapsed: false
    };
  }
};
</script>

<style lang="scss" scoped>
$min-xs-width: 480px;
$min-sm-width: 768px;

a {
  text-decoration: none;
}

.collapse {
  display: none;

  &.in {
    display: block;
  }
}

.nav {
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;

  & > li {
    position: relative;
    display: block;

    & > a {
      position: relative;
      display: block;
      padding: 10px 15px;

      &:hover,
      &:focus {
        text-decoration: none;
        background-color: #eee;
      }
    }

    &.disabled > a {
      color: #777;

      &:hover,
      &:focus {
        color: #777;
        text-decoration: none;
        background-color: transparent;
        cursor: not-allowed;
      }
    }
  }

  .open > a {
    &:hover,
    &:focus {
      background-color: #eee;
      border-color: #777;
    }
  }
}

.navbar {
  position: relative;
  clear: both;
  min-height: 50px;
  margin-bottom: 20px;
  border: 1px solid transparent;
}

.navbar-header {
  clear: both;
  @media (min-width: $min-sm-width) {
    float: left;
  }
}

.navbar-collapse {
  padding-right: 15px;
  padding-left: 15px;
  overflow-x: visible;
  border-top: 1px solid transparent;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);

  &.in {
    clear: both;
    overflow-y: auto;
  }

  @media (min-width: $min-sm-width) {
    width: auto;
    border-top: 0;
    box-shadow: none;

    &.collapse {
      display: block;
      height: auto;
      padding-bottom: 0;
      overflow: visible;
    }

    &.in {
      overflow-y: visible;
    }

    .navbar-fixed-top &,
    .navbar-static-top &,
    .navbar-fixed-bottom & {
      padding-right: 0;
      padding-left: 0;
    }
  }
}

.navbar-fixed-top,
.navbar-fixed-bottom {
  .navbar-collapse {
    max-height: 340px;

    @media (max-device-width: $min-xs-width) and (orientation: landscape) {
      max-height: 200px;
    }
  }

  position: fixed;
  right: 0;
  left: 0;
  z-index: 1000;
}

.navbar-fixed-top {
  top: 0;
  border-width: 0 0 1px;
}

.navbar-fixed-bottom {
  bottom: 0;
  margin-bottom: 0;
  border-width: 1px 0 0;
}

.container,
.container-fluid {
  > .navbar-header,
  > .navbar-collapse {
    margin-right: -15px;
    margin-left: -15px;

    @media (min-width: $min-sm-width) {
      margin-right: 0;
      margin-left: 0;
    }
  }
}

.navbar-static-top {
  z-index: 1000;
  border-width: 0 0 1px;
}

.navbar-brand {
  float: left;
  padding: 15px 15px;
  font-size: 18px;
  line-height: 20px;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  > img {
    display: block;
  }

  @media (min-width: $min-sm-width) {
    .navbar > .container &,
    .navbar > .container-fluid & {
      margin-left: -15px;
    }
  }
}

.navbar-toggle {
  position: relative;
  float: right;
  margin: 8px 15px 8px 0;
  padding: 9px 10px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;

  &:focus {
    outline: 0;
  }

  .icon-bar {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 1px;
    & + .icon-bar {
      margin-top: 4px;
    }
  }

  @media (min-width: $min-sm-width) {
    display: none;
  }
}

.navbar-nav {
  margin: 7.5px -15px;

  > li > a {
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 20px;
  }

  @media (max-width: $min-sm-width) {
    .open .dropdown-menu {
      position: static;
      float: none;
      width: auto;
      margin-top: 0;
      background-color: transparent;
      border: 0;
      box-shadow: none;
      > li > a,
      .dropdown-header {
        padding: 5px 15px 5px 25px;
      }
      > li > a {
        line-height: 20px;
        &:hover,
        &:focus {
          background-image: none;
        }
      }
    }
  }

  @media (min-width: $min-sm-width) {
    float: left;
    margin: 0;

    > li {
      float: left;
      > a {
        padding-top: 15px;
        padding-bottom: 15px;
      }
    }
  }
}

.navbar-form {
  margin: 15px -15px;
  padding: 10px 15px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;

  .form-group {
    @media (max-width: $min-sm-width) {
      margin-bottom: 5px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media (min-width: $min-sm-width) {
    width: auto;
    margin-right: 0;
    margin-left: 0;
    padding-top: 0;
    padding-bottom: 0;
    border: 0;
  }
}

.navbar-nav > li > .dropdown-menu {
  margin-top: 0;
}

.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {
  margin-bottom: 0;
}

.navbar-text {
  margin-top: 15px;
  margin-bottom: 15px;

  @media (min-width: $min-sm-width) {
    float: left;
    margin-right: 15px;
    margin-left: 15px;
  }
}

@media (min-width: $min-sm-width) {
  .navbar-left {
    float: left;
  }
  .navbar-right {
    float: right;
    margin-right: -15px;

    ~ .navbar-right {
      margin-right: 0;
    }
  }
}

.navbar-default {
  background-color: #f8f8f8;
  border-color: #e8e8e8;

  .navbar-brand {
    color: #777;
    &:hover,
    &:focus {
      color: #e5e5e5;
      background-color: transparent;
    }
  }

  .navbar-text {
    color: #777;
  }

  .navbar-nav {
    > li > a {
      color: #777;

      &:hover,
      &:focus {
        color: #333;
        background-color: transparent;
      }
    }
    > .active > a {
      &,
      &:hover,
      &:focus {
        color: #555;
        background-color: transparent;
      }
    }
    > .disabled > a {
      &,
      &:hover,
      &:focus {
        color: #ccc;
        background-color: transparent;
      }
    }

    > .open > a {
      &,
      &:hover,
      &:focus {
        color: #555;
        background-color: transparent;
      }
    }

    @media (max-width: $min-sm-width) {
      .open .dropdown-menu {
        > li > a {
          color: #777;
          &:hover,
          &:focus {
            color: #333;
            background-color: transparent;
          }
        }
        > .active > a {
          &,
          &:hover,
          &:focus {
            color: #555;
            background-color: transparent;
          }
        }
        > .disabled > a {
          &,
          &:hover,
          &:focus {
            color: #ccc;
            background-color: transparent;
          }
        }
      }
    }
  }

  .navbar-toggle {
    border-color: #ddd;
    &:hover,
    &:focus {
      background-color: #ddd;
    }
    .icon-bar {
      background-color: #888;
    }
  }

  .navbar-collapse,
  .navbar-form {
    border-color: #e8e8e8;
  }

  .navbar-link {
    color: #777;
    &:hover {
      color: #333;
    }
  }

  .btn-link {
    color: #777;
    &:hover,
    &:focus {
      color: #333;
    }
    &[disabled],
    fieldset[disabled] & {
      &:hover,
      &:focus {
        color: #ccc;
      }
    }
  }
}
</style>
