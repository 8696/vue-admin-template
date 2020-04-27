<template>
  <div>
      <div class="card">

        <ag-grid-vue :enableColResize="true"
                     :enableSorting="true"
                     style="height: 300px;"
                     :enableFilter="true"
                     class="ag-theme-balham"
                     :columnDefs="columnDefs"
                     :suppressAutoSize="true"
                     ref="ag"
                     @hook:mounted="onGridMounted"
                     :rowData="rowData">
        </ag-grid-vue>
      </div>


  </div>
</template>

<script>
  import 'ag-grid-community/dist/styles/ag-grid.css';
  import 'ag-grid-community/dist/styles/ag-theme-balham.css';
  import {AgGridVue} from 'ag-grid-vue';

  export default {
    data() {
      return {
        columnDefs: null,
        rowData: null
      };
    },
    components: {
      AgGridVue
    },
    beforeMount() {
      this.columnDefs = [
        {headerName: 'Make', field: 'make'},
        {headerName: 'Model', field: 'model'},
        {headerName: 'Price', field: 'price'},

      ];

      this.rowData = [
        {make: 'Toyota', model: 'Celica', price: 35000},
        {make: 'Ford', model: 'Mondeo', price: 32000},
        {make: 'Porsche', model: 'Boxter', price: 72000}
      ];
    },
    async mounted() {

    },
    methods: {
      onGridMounted() {
        this.$refs['ag'].gridOptions.api.sizeColumnsToFit();
      }
    }
  };
</script>

<style scoped>

</style>
