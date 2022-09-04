<template>
  <div class="flex space-x-2">
    <div class="headers">
      <div><span class="title">Course</span></div>
      <div class="breadcrumb">
        <Breadcrumb :home="home" :model="items" />
      </div>
    </div>
  </div>
  <div class="col-12">
    <div class="card">
      <Toast />
      <div class="card-header">
        <div class="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
          <div class="flex space-x-2 mt-4">
            <div>
              <h5 class="mr-7">Course List</h5>
            </div>
            <div>
              <img src="layout/images/filter.svg" alt="Filter" class="mr-3" />
            </div>
            <div class="search-container">
              <input class="search" id="searchleft" type="search" v-model="filters['global'].value"
                placeholder="Search" />
              <label class="button searchbutton" for="searchleft"><span class="mglass">&#9906;</span></label>
            </div>
          </div>

          <span class="block mt-2 md:mt-0">
            <Button label="Add Course" icon="pi pi-plus" class="p-button-outlined p-button-danger mr-2 mb-2"
              @click="redirectToHome()"></Button>
          </span>
        </div>
      </div>
      <DataTable ref="dt" :value="courses" dataKey="id" :paginator="true" :rows="10" :filters="filters"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[5, 10, 25]"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries" responsiveLayout="scroll">
        <Column field="title" header="Title" :sortable="false" headerStyle="width:50%; min-width:10rem;">
        </Column>
        <Column field="organization" header="Organization" :sortable="false" headerStyle="width:14%; min-width:10rem;">
        </Column>
        <Column field="status" header="Status" :sortable="true" headerStyle="width:14%; min-width:10rem;">
          <template #body="slotProps">
            <span class="p-column-title">Status</span>
            <span :class="
              'course-badge status-' +
              (slotProps.data.status
                ? slotProps.data.status.toLowerCase()
                : '')
            ">{{ slotProps.data.status }}</span>
          </template>
        </Column>
        <Column field="endDate" header="Last Update" :sortable="false" headerStyle="width:14%; min-width:10rem;">
        </Column>

        <Column headerStyle="min-width:10rem;" header="Action">
          <template #body="slotProps">
            <i class="pi pi-ellipsis-v ml-2" @click="openAction(slotProps.data)"></i>
          </template>
        </Column>
      </DataTable>

      <Dialog v-model:visible="actionDialog" :style="{ width: '450px' }" :modal="true">
        <br />
        <div class="dialog-centered mb-4">
          <img src="layout/images/alert.svg" alt="Logo" />
        </div>
        <div class="dialog-centered mb-4">
          <h3>Edit or Delete</h3>
        </div>
        <div class="dialog-centered">
          <Button label="Edit" class="p-button-danger mr-2 mb-2" @click="editProduct(slotProps.data)" />
          <Button label="Delete" class="p-button-outlined p-button-danger mr-2 mb-2" />
        </div>
      </Dialog>
    </div>
  </div>
</template>

<script>
import { FilterMatchMode } from 'primevue/api';
import CourseService from '../../service/CourseService.js';
export default {
  data() {
    return {
      home: {
        icon: 'pi pi-home',
        to: '/',
      },
      items: [{ label: 'Content' }, { label: 'Course' }],
      courses: null,
      actionDialog: false,
      product: {},
      filters: {},
      submitted: false,
      statuses: [
        { label: 'PUBLISH', value: 'publish' },
        { label: 'DRAFT', value: 'draft' },
        { label: 'CANCEL', value: 'cancel' },
      ],
    };
  },

  courseService: null,
  created() {
    this.courseService = new CourseService();
    this.initFilters();
  },
  mounted() {
    this.courseService.getCourse().then((data) => (this.courses = data));
  },
  methods: {
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      };
    },
    redirectToHome() {
      this.$router.push('/course-add');
    },
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/demo/badges.scss';
@import '../../assets/styles/sass/course-list.scss';
</style>
