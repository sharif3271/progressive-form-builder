import './App.scss'
import { FormObjectModelStore, ProFormBuilder } from '../lib/main'
import { useState } from 'react'


const InitForm = JSON.parse(`{"title":"Job Application Form","description":"This form helps you to an idea to filling and send your application the for available job opportunities.","itemsObject":{"1722007379923":{"id":"1722007379923","isRequired":true,"type":1,"title":"Full Name","description":"Same as your passport or driving licence"},"1722007434955":{"id":"1722007434955","isRequired":true,"type":1,"title":"Email Address"},"1722007459324":{"id":"1722007459324","isRequired":true,"type":5,"title":"What position are you applying for?","options":["Video Editor","Thumbnail Designer","Script writer"]},"1722007526868":{"id":"1722007526868","isRequired":true,"type":5,"title":"Education:","options":["High School","Associates","Bachelor's","Master","PHD"]},"1722007610667":{"id":"1722007610667","isRequired":true,"type":5,"title":"What's your current employment status?","options":["Employed","Self-Employed","Unemployed","Student"]},"1722007683009":{"id":"1722007683009","isRequired":true,"type":2,"title":"Work Experience:","description":"Please indicate all experiences of last 3 year"},"1722007762596":{"id":"1722007762596","isRequired":false,"type":2,"title":"References:"},"1722007799186":{"id":"1722007799186","isRequired":true,"type":6,"title":"Availability to start work:"},"1722008052241":{"id":"1722008052241","isRequired":true,"type":6,"title":"Birth date:","description":"Same as your passport"},"1722008080800":{"id":"1722008080800","isRequired":true,"type":7,"title":"CV Upload:","description":"please upload your CV as PDF file"}}}`)

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
        <button className="form-save" style={{ display: 'none' }} onClick={() => {
          console.log(
            JSON.stringify(form)
          )
        }}>
          {tab === 'create|edit' ? 'Save' : 'Submit'}
        </button>
      </div>


    </div>
  )
}