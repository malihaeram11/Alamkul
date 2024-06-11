import React, {  useState } from 'react';



const Feedback = () => {
  const [parent, setParent] = useState(false);
  const [student, setStudent] = useState(false);
  const [teacher, setTeacher] = useState(false);
  const [activeTab, setActiveTab] = useState('student');

  const handleStudentClick = () => {
    setStudent(true);
    setParent(false);
    setTeacher(false); 
    setActiveTab('student');
  };

  const parentClick = () => {
    setParent(true);
    setStudent(false);
    setTeacher(false);
    setActiveTab('parent');
  };
  const teacherClick = () => {
    setTeacher(true);
    setParent(false);
    setStudent(false);
    setActiveTab('teacher')
  };
  

  return (
    <div>
      <div className='mt-20'>
        <p className='flex justify-center text-4xl font-semibold '>Perspectives on Our Institute: Shared</p>
        <p className='flex justify-center text-4xl font-semibold'>Experiences and Feedback</p>
      </div>
      <div className='mt-20 flex justify-around'>
        <button     className={`student${activeTab === 'student' ? ' active' : ''}`} onClick={handleStudentClick}>Students</button>
        <button   className={`parent${activeTab === 'parent' ? ' active' : ''}`} onClick={parentClick}>Parents</button>
        <button  className={`teacher${activeTab === 'teacher' ? ' active' : ''}`} onClick={teacherClick}>Teachers</button>
      </div>

      <div className='flex justify-around mt-20'>
       {!parent && !teacher &&(
          <>
            <div className='shadab' >
            <div class=" shadab-images cursor-pointer ratio ratio-16x9">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/aE0XMuz6r0c?si=BrURJEO2Giz_BG5G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
              <div>
                <p className='text-[17px] text-center p-2 font-semibold'>"Would like to take a moment and thank Alamkul and their teachers as they helped me crack JEE and got me placed in NITK Surathkal. The teacher's are really helpful and are ready to help you in each step you take."</p>
              </div>
            </div>
            <div className='parth'>
              <div className='parth-images cursor-pointer  ratio ratio-16x9'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/nahKQrsNafI?si=A1ftn2s4IsF-xDAG"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <div>
                <p className='text-[17px] text-center p-3 font-semibold'>"Alamkul deserves major credit to where i'm right now, Alamkul customized the plan of entire batch to match my needs. Alamkul is a wonderful place to study with healthy environment."</p>
              </div>
            </div>
            <div className='nitin'>
              <div className='nitin-images cursor-pointer ratio ratio-16x9'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/CdCRVapfv1A?si=bcJOZJAu1PQwOydr"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <div>
                <p className='text-[17px] text-center p-3 font-semibold'>"Started going to Alamkul in grade 12 regret not joining earlier, Joining Alamkul was a very good decision as it helped me very much, my boards result were pretty good."</p>
              </div>
            </div>
          </>
       )}
      </div>

      {parent && (
        <div className='flex justify-around '>
          <div className='bijay'>
            <div className='bijay-images cursor-pointer ratio ratio-16x9'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kzJkbHr3zv0?si=74JJqHH0YzLTBl_m"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div>
              <p className='text-[17px] text-center p-3 font-semibold'>"Congratulation for being part of this positive association, you are blessed to have teachers who have experience in the corporate world and real IIT experience."</p>
            </div>
          </div>
          <div className='one'>
            <div className='bijay-images cursor-pointer ratio ratio-16x9'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kzJkbHr3zv0?si=74JJqHH0YzLTBl_m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div>
              <p className='text-[17px] text-center p-3 font-semibold'>"Congratulation for being part of this positive association, you are blessed to have teachers who have experience in the corporate world and real IIT experience."</p>
            </div>
          </div>
          <div className='two'>
            <div className='bijay-images cursor-pointer ratio ratio-16x9'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kzJkbHr3zv0?si=74JJqHH0YzLTBl_m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div>
              <p className='text-[17px] text-center p-3 font-semibold'>"Congratulation for being part of this positive association, you are blessed to have teachers who have experience in the corporate world and real IIT experience."</p>
            </div>
          </div>
        </div>
      )}

   {teacher && (
        <div className='flex justify-around'>
          <div className='eram' >
            <div  className='eram-images cursor-pointer ratio ratio-16x9'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Mq9fbJ3DcZc?si=uXSMmQ-OfHrNPgJh"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div>
              <p className='text-[17px] text-center p-2 font-semibold'>"Unlock the mysteries of the world with our captivating chemistry classes. Join us for an immersive learning experience where elements come alive, reactions ignite curiosity, and students become true scientists."</p>
            </div>
          </div>
          <div className='kaynat'>
            <div className='kaynat-images cursor-pointer ratio ratio-16x9'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bBwjClbMthI?si=3IBoYMK_vktgfXR0"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div>
              <p className='text-[17px] text-center p-2 font-semibold'>"Unleash the power of the universe through our captivating physics classes. Join us as we explore the laws that govern the world around us, unravel the mysteries of motion, and delve into the wonders of energy and forces."</p>
            </div>
          </div>
          <div className='sahar'>
            <div className='sahar-images cursor-pointer ratio ratio-16x9'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qZpsoOtrerU?si=N6Q_u05WhJ1pHYpU"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div>
              <p className='text-[17px] text-center p-3 font-semibold'>"Embark on a captivating journey into the intricate world of biology. Join our dynamic biology classes and unlock the mysteries of life as we explore the fascinating realms of cells, genetics, and ecosystems."</p>
            </div>
          </div>
        </div>
   )}

    </div>
  );
};

export default Feedback;
