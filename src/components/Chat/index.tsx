import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined,Mic } from '@material-ui/icons'
import React from 'react'
import './Chat.css'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'


interface Props {}

const validationSchema = yup.object({
  message: yup.string().required()
})


const Chat = (props: Props) => {
  return <div className="chat">
    <div className="chat__header">
      <Avatar/>
      <div className="chat__headerInfo">
        <h3>Room name</h3>
        <p>Last see at ...</p>
      </div>
      <div className="chat__headerRight">
        <IconButton>
        <SearchOutlined/>
        </IconButton>

        <IconButton>
        <AttachFile/>  
        </IconButton>

        <IconButton>
         <MoreVert/> 
        </IconButton>
      </div>
    </div>
    <div className="chat__body">
      <p className='chat__message'>
        <span className="chat__name">
          Daniel
        </span>
        <span className="chat__timestamp">
          {new Date().toUTCString()}
        </span>
      </p>

      <p className='chat__message chat__receiver'>
        <span className="chat__name">
          Daniel
        </span>
        <span className="chat__timestamp">
          {new Date().toUTCString()}
        </span>
      </p>
    </div>

    <div className="chat__footer">
      <InsertEmoticon/>
      <Formik
          initialValues={{ message: '' }}
          validateOnChange={true}
          validationSchema={validationSchema}
          onSubmit={(data, { setSubmitting, resetForm }) => {
            setSubmitting(true)
            // make async call
            console.log('DATTAAAAA', data)
            setSubmitting(false)
            resetForm()
          }}
        >
          {({ values, errors, isSubmitting, touched }) => {
            const Border =
              touched.message && errors.message ? 'red' : 'transparent'

            return (
              <Form>
                <Field
                  type='text'
                  name='message'
                  placeholder={'Type a message'}
                  style={{ borderColor: Border }}
                  
                />

<button type='submit'>Send a message</button>
          
              </Form>
            )
          }}
        </Formik>
      <Mic/>
    </div>
  </div>
}

export default Chat
