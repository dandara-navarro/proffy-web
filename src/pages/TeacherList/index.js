import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import './styles.css';

function TeacherList() {
   return (
       <div id="page-teacher-list" className="container">
           <PageHeader title="These are all the available teachers.">
               <form id="search-teachers">
                   <Input name="subject" label="Subject" />
                   <Input name="week_day" label="Week Day" />
                   <Input name="time" type="time" label="Time" />
               </form>
           </PageHeader>
       

       <main>
           <TeacherItem />
           <TeacherItem />
           <TeacherItem />
           <TeacherItem />
           <TeacherItem />
       </main>
    </div>
   ) 
}

export default TeacherList;