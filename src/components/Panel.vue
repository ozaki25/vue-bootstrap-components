<template>
  <div class="panel">
    <div v-if="heading" class="panel-heading">{{heading}}</div>
    <div v-if="body" class="panel-body">{{body}}</div>
    <div v-if="footer" class="panel-footer">{{footer}}</div>
  </div>
</template>

<script>
export default {
  name: "Panel",
  props: {
    heading: {
      type: String,
      default: null
    },
    body: {
      type: String,
      default: null
    },
    footer: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.panel {
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}

.panel-body {
  clear: both;
  padding: 15px;
}

.panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

  > .dropdown .dropdown-toggle {
    color: inherit;
  }
}

.panel-title {
  margin-top: 0;
  margin-bottom: 0;
  color: inherit;
  font-size: 16px;

  > a,
  > small,
  > .small,
  > small > a,
  > .small > a {
    color: inherit;
  }
}

.panel-footer {
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}

.panel {
  > .list-group,
  > .panel-collapse > .list-group {
    margin-bottom: 0;

    .list-group-item {
      border-width: 1px 0;
      border-radius: 0;
    }

    &:first-child {
      .list-group-item:first-child {
        border-top: 0;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
      }
    }

    &:last-child {
      .list-group-item:last-child {
        border-bottom: 0;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
      }
    }
  }
}

.panel-heading + .list-group {
  .list-group-item:first-child {
    border-top-width: 0;
  }
}

.list-group + .panel-footer {
  border-top-width: 0;
}

.panel {
  > .table,
  > .table-responsive > .table,
  > .panel-collapse > .table {
    margin-bottom: 0;

    caption {
      padding-right: 15px;
      padding-left: 15px;
    }
  }
  > .table:first-child,
  > .table-responsive:first-child > .table:first-child {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;

    > thead:first-child,
    > tbody:first-child {
      > tr:first-child {
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;

        td:first-child,
        th:first-child {
          border-top-left-radius: 3px;
        }
        td:last-child,
        th:last-child {
          border-top-right-radius: 3px;
        }
      }
    }
  }
  > .table:last-child,
  > .table-responsive:last-child > .table:last-child {
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;

    > tbody:last-child,
    > tfoot:last-child {
      > tr:last-child {
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;

        td:first-child,
        th:first-child {
          border-bottom-left-radius: 3px;
        }
        td:last-child,
        th:last-child {
          border-bottom-right-radius: 3px;
        }
      }
    }
  }
  > .panel-body + .table,
  > .panel-body + .table-responsive,
  > .table + .panel-body,
  > .table-responsive + .panel-body {
    border-top: 1px solid #ddd;
  }
  > .table > tbody:first-child > tr:first-child th,
  > .table > tbody:first-child > tr:first-child td {
    border-top: 0;
  }
  > .table-bordered,
  > .table-responsive > .table-bordered {
    border: 0;
    > thead,
    > tbody,
    > tfoot {
      > tr {
        > th:first-child,
        > td:first-child {
          border-left: 0;
        }
        > th:last-child,
        > td:last-child {
          border-right: 0;
        }
      }
    }
    > thead,
    > tbody {
      > tr:first-child {
        > td,
        > th {
          border-bottom: 0;
        }
      }
    }
    > tbody,
    > tfoot {
      > tr:last-child {
        > td,
        > th {
          border-bottom: 0;
        }
      }
    }
  }
  > .table-responsive {
    margin-bottom: 0;
    border: 0;
  }
}

.panel-group {
  margin-bottom: 20px;
  .panel {
    margin-bottom: 0;
    border-radius: 4px;

    + .panel {
      margin-top: 5px;
    }
  }

  .panel-heading {
    border-bottom: 0;
    + .panel-collapse > .panel-body,
    + .panel-collapse > .list-group {
      border-top: 1px solid #ddd;
    }
  }

  .panel-footer {
    border-top: 0;
    + .panel-collapse .panel-body {
      border-bottom: 1px solid #ddd;
    }
  }
}
</style>
