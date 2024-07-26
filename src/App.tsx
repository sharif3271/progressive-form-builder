import './App.scss'
import { FormObjectModelStore, ProFormBuilder } from '../lib/main'
import { useState } from 'react'


const InitForm = JSON.parse(`{"title":"Main Form","description":"the description of main form","itemsObject":{"1721383968971":{"id":"1721383968971","isRequired":true,"type":1,"title":"Experience ","description":"How many Years of Experience do you have, please enter the number only!"},"1721384046848":{"id":"1721384046848","isRequired":true,"type":1,"title":"Fullname"},"1721384066884":{"id":"1721384066884","isRequired":true,"type":3,"title":"Tools","description":"what tools are you familiar ?","options":["After effect","Remotion","photoshop","google work"]}}}`)

export const App = () => {

  const [form, setForm] = useState<FormObjectModelStore>()
  const [tab, setTab] = useState<'create|edit' | 'view'>('create|edit')


  return (

    <div className='app-container'>
      <div className='tab-container'>
        <div className={`${tab === 'create|edit' ? 'on' : ''}`} onClick={() => setTab('create|edit')}>Edit|Create</div>
        <div className={`${tab === 'view' ? 'on' : ''}`} onClick={() => setTab('view')}>View</div>
      </div>


      <ProFormBuilder
        initialValue={form ?? InitForm}
        onChangeValue={(v) => setForm(v)}
        isView={tab === 'view'}
      />


      <div className="save-container">
        <div style={{ flex: 1 }} />
        <button className="form-save">
          {tab === 'create|edit' ? 'Save' : 'Submit'}
        </button>
      </div>


    </div>
  )
}