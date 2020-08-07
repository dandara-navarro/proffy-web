import React from 'react';

import PageHeader from '../../components/PageHeader';
import './styles.css';

function TeacherForm() {
   return (
       <div id="page-teacher-form" className="container">
           <PageHeader 
                title="It is amazing you want to teach classes"
                description="The first step is to fill this subscribe form" />

       <main>
           <fieldset>
               <legend>Your Data</legend>

               <div className="input-block">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" />
                </div>

                <div className="input-block">
                    <label htmlFor="avatar">Avatar</label>
                    <input type="text" id="avatar" />
                </div>

                <div className="input-block">
                    <label htmlFor="whatsapp">WhatsApp</label>
                    <input type="text" id="whatsapp" />
                </div>
           </fieldset>
       </main>
    </div>
   ) 
}

export default TeacherForm;