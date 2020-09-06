import { Avatar, IconButton } from '@material-ui/core'
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import SidebarChat from '../SidebarChat'

interface Props {}

const validationSchema = yup.object({
  search: yup.string().required()
})

const Sidebar = (props: Props) => {
  return <div className="sidebar">
    <div className="sidebar__header">
      <Avatar/>
      <div className="sidebar__headerRight">
        <IconButton>
          <DonutLarge/>
        </IconButton>

        <IconButton>
         <Chat/>
        </IconButton>

        <IconButton>
          <MoreVert/>
        </IconButton>
      </div>
    </div>
    <div className="sidebar__search">
      <div className="sidebar__searchContainer">
        <SearchOutlined/>
        <Formik
          initialValues={{ search: '' }}
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
              touched.search && errors.search ? 'red' : 'transparent'

            return (
              <Form>
                <Field
                  type='text'
                  name='message'
                  placeholder={'Search or start new chat'}
                  style={{ borderColor: Border }}
                  
                />


          
              </Form>
            )
          }}
        </Formik>
      </div>
    </div>
    <div className="sidebar__chats">
      <SidebarChat />
    </div>
  </div>
}

export default Sidebar
