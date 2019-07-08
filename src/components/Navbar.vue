<template>
  <nav :class="{nomal: nomal}">
    <Container>
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navigation"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" :href="titleLink">{{title}}</a>
      </div>
      <div class="collapse navbar-collapse" id="navigation">
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
  }
};
</script>

<style lang="scss" scoped>
$min-sm-width: 768px;

nav {
  position: relative;
  min-height: 50px;
  margin-bottom: 20px;
  border: 1px solid transparent;

  &.nomal {
    color: #777;
    background-color: #f8f8f8;
    border-color: #e7e7e7;
  }
}

a {
  text-decoration: none;
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
}

.navbar-header {
  @media (min-width: $min-sm-width) {
    margin-right: 0;
    margin-left: 0;
  }

  @media (max-width: $min-sm-width) {
    margin-right: -15px;
    margin-left: -15px;
  }
}

.navbar-brand {
  float: left;
  height: 50px;
  padding: 15px 15px;
  font-size: 18px;
  line-height: 20px;
}

.navbar-nav {
  margin: 7.5px -15px;

  & > li > a {
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 20px;
  }

  @media (min-width: $min-sm-width) {
    float: left;
    margin: 0;

    & > li {
      float: left;

      & > a {
        padding-top: 15px;
        padding-bottom: 15px;
      }
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

  @media (min-width: $min-sm-width) {
    display: none;
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
}

.navbar-collapse {
  padding-right: 15px;
  padding-left: 15px;
  overflow-x: visible;
  border-top: 1px solid transparent;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);

  .in {
    overflow-y: auto;
  }

  @media (min-width: $min-sm-width) {
    width: auto;
    border-top: 0;
    box-shadow: none;

    .collapse {
      display: block;
      height: auto;
      padding-bottom: 0;
      overflow: visible;
    }

    .in {
      overflow-y: visible;
    }
  }
}

.nomal {
  .navbar-brand {
    color: #777;
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
    border-color: #e7e7e7;
  }

  .navbar-link {
    color: #777;

    &:hover {
      color: #333;
    }
  }

  .navbar-nav {
    & > li > a {
      color: #777;
    }

    & > .active > a {
      color: #555;
      background-color: #e7e7e7;
    }

    & > li > a:hover,
    & > li > a:focus {
      color: #333;
      background-color: transparent;
    }

    & > .active > a:hover,
    & > .active > a:focus {
      color: #555;
      background-color: #e7e7e7;
    }
  }
}
</style>
