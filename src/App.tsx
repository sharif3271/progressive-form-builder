import './App.scss'
import { ProFormBuilder } from '../lib/main'


const InitForm = JSON.parse(`{"title":"Main Form","description":"the description of main form","itemsObject":{"1721383968971":{"id":"1721383968971","isRequired":true,"type":1,"title":"Experience ","description":"How many Years of Experience do you have, please enter the number only!"},"1721384046848":{"id":"1721384046848","isRequired":true,"type":1,"title":"Fullname"},"1721384066884":{"id":"1721384066884","isRequired":true,"type":3,"title":"Tools","description":"what tools are you familiar ?","options":["After effect","Remotion","photoshop","google work"]}}}`)

export const App = () => {
  return (
    <div className='app-container'>
      <ProFormBuilder initialValue={InitForm} />
      <div className="save-container">
        <div style={{ flex: 1 }} />
        <button className="form-save">Save</button>
      </div>
    </div>
  )
}