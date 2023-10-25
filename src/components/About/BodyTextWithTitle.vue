<template>
    <section class="wow animate__fadeIn">
    <div class="container">
      <h5 class="alt-font font-weight-500 text-center" style="color: #bf8c4c">
        {{ content?.title }}
      </h5>
      <div v-for="body in content.body" :key="content._key">
        <p v-if="body._type === 'block'">
        <ul v-if="body.hasOwnProperty('listItem') && body.listItem === 'bullet'">
          <li v-if="body.markDefs.length > 0 && body.markDefs[0].hasOwnProperty('href')"><a
              style="text-decoration: underline; color: blue;" target="_blank" :href="body.markDefs[0]?.href">{{
                body.children[0]?.text }}</a></li>
          <li v-else>{{ body.children[0].text }}</li>
        </ul>

        <span v-if="!body.hasOwnProperty('listItem')" v-for="child in body.children" :key="child._key" class="mt-3">
          <span v-if="child._type === 'span'">
            <span style="color: #bf8c4c" v-if="child.marks.length > 0 && child.marks[0] === 'strong'">{{ child.text
            }}</span>
            <span v-else>{{ child.text }}</span>
          </span>
        </span>
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  content: {
    type: Object,
    default: () => {},
  },
});
</script>