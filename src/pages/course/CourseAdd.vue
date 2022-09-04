<template>
  <div class="card">
    <div class="card-header">
      <div
        class="flex flex-column md:flex-row md:justify-content-between md:align-items-center"
      >
        <div>
          <h5 class="mr-7 title-header">Add Course</h5>
        </div>
      </div>
      <hr />
      <div class="title">Course Details<span class="line"></span></div>
      <div class="grid p-fluid">
        <div class="col mt-4">
          <div class="p-fluid grid">
            <div class="col-12 md:col-6">
              <div class="field">
                <label for="inputtext">Title</label>
                <InputText id="inputtext" type="text" />
              </div>
              <div class="field">
                <label for="inputmask">Start Date</label>
                <InputMask
                  id="inputmask"
                  mask="99/99/9999"
                  slotChar="mm/dd/yyyy"
                />
              </div>
              <div class="field">
                <label for="calendar">Caption</label>
                <Textarea rows="5" cols="30" />
              </div>
            </div>

            <div class="col-12 md:col-6">
              <div class="field">
                <label for="inputmask">Thumbnail</label>
                <div class="p-inputgroup">
                  <InputText type="file" />
                  <Button label="Upload" class="p-button-danger" />
                </div>
              </div>
              <div class="field">
                <label for="inputmask">End Date</label>
                <InputMask
                  id="inputmask"
                  mask="99/99/9999"
                  slotChar="mm/dd/yyyy"
                />
              </div>
              <div class="field">
                <label for="calendar">Description</label>
                <Textarea rows="5" cols="30" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid p-fluid">
        <div class="col-12 md:col-6">
          <div class="title">Content Category<span class="line-sm"></span></div>
          <div class="field mt-4">
            <label for="inputtext">levels</label>
            <Dropdown
              v-model="dropdownValue"
              :options="dropdownValues"
              optionLabel="name"
              placeholder="Select"
            />
          </div>
          <div class="field">
            <label for="inputtext">Categories</label>
            <Dropdown
              v-model="dropdownValue"
              :options="dropdownValues"
              optionLabel="name"
              placeholder="Select"
            />
          </div>
          <div class="field">
            <label for="inputtext">Competencies Based Category</label>
            <Chips v-model="chipsCompetencies" />
          </div>
          <div class="field">
            <label for="inputtext">Business Domain</label>
            <Chips v-model="chipsBusinessDomain" />
          </div>
        </div>

        <div class="col-12 md:col-6">
          <div class="title mb-3">Content Control<span class="line-sm"></span></div>

          <div>
            <span class="subtitle">Privacy</span>
            <div class="field-radiobutton mt-4">
              <RadioButton
                id="option1"
                name="option"
                value="Public"
                v-model="publicValue"
              />
              <label for="calendar"
                >Public <br />
                <span class="radio-desc">
                  Everyone can watch your video</span
                ></label
              >
            </div>
            <div class="field-radiobutton mt-4">
              <RadioButton
                id="option1"
                name="option"
                value="Protected"
                v-model="protectedValue"
              />
              <label for="calendar"
                >Protected <br />
                <span class="radio-desc"
                  >Everyone with link can watch your video</span
                >
              </label>
            </div>
            <div class="field-radiobutton mt-4">
              <RadioButton
                id="option1"
                name="option"
                value="Private"
                v-model="privateValue"
              />
              <label for="calendar"
                >Private <br />
                <span class="radio-desc">
                  Only someone with access can watch your video
                </span>
              </label>
            </div>
          </div>
          <div>
            <div class="subtitle">Sequence</div>
            <div class="field-radiobutton mt-4">
              <RadioButton
                id="option1"
                name="option"
                value="Random"
                v-model="RandomValue"
              />
              <label for="calendar"
                >Random <br />
                <span class="radio-desc">
                  User can select content without paying attention to the order
                  of the content. (Course Flow)
                </span>
              </label>
            </div>
            <div class="field-radiobutton mt-4">
              <RadioButton
                id="option1"
                name="option"
                value="Sequence"
                v-model="sequenceValue"
              />
              <label for="calendar"
                >Sequence <br />
                <span class="radio-desc">
                  User are required to follow the course flow.
                </span>
              </label>
            </div>
          </div>

          <div>
            <span class="subtitle">Certified</span>
            <div class="field-radiobutton mt-4">
              <RadioButton
                id="option1"
                name="option"
                value="Certificate"
                v-model="certificateValue"
              />
              <label for="calendar"
                >Certificate <br />
                <span class="radio-desc"> Everyone can watch your video </span>
              </label>
            </div>
            <div class="field-radiobutton mt-4">
              <RadioButton
                id="option1"
                name="option"
                value="NoCertificate"
                v-model="nonCertificateValue"
              />
              <label for="calendar"
                >No Certificate <br />
                <span class="radio-desc">
                  Everyone with link can watch your video
                </span>
              </label>
            </div>
          </div>
          <div class="field">
            <label for="inputtext">Status</label>
            <Dropdown
              v-model="dropdownValue"
              :options="dropdownValues"
              optionLabel="name"
              placeholder="Select"
            />
          </div>
          <div class="field">
            <label for="inputtext">Learning Hours (on minutes)</label>
            <Chips v-model="chipsBusinessDomain" />
          </div>
        </div>
        <hr />
        <div class="relative">
          <div class="flex space-x-4 absolute btn-position">
            <div><Button label="Add" class="p-button-danger" /></div>
            &nbsp;
            <div>
              <Button
                label="Discard"
                class="p-button-danger p-button-outlined"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FilterMatchMode } from 'primevue/api';
import CourseService from '../../service/CourseService';
export default {
  data() {
    return {
      chipsCompetencies: null,
      chipsBusinessDomain: null,
      radioValue: null,
      publicValue: null,
      protectedValue: null,
      privateValue: null,
      RandomValue: null,
      sequenceValue: null,
      certificateValue: null,
      nonCertificateValue: null,
      learningHoursValue: null,
      dropdownValue: null,
      dropdownValues: [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
      ],
    };
  },

  courseService: null,
  created() {
    this.courseService = new CourseService();
    this.initFilters();
  },

  methods: {
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      };
    },
  },
};
</script>

<style lang="scss">
  @import '../../assets/styles/sass/course-add.scss';
</style>
