import { useVuetify } from '@/plugins/vuetify'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import HelloWorldVue from './HelloWorld.vue'

test('displays message', async () => {
  const wrapper = mount(HelloWorldVue, {
    global: {
      plugins: [createTestingPinia(), useVuetify()]
    }
  })

  expect(wrapper.text()).toContain('Hello World!')
  expect(wrapper.text()).toContain('0')
})
