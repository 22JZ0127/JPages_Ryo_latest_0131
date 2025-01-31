import Styles from './teamStudent.module.css'

const TeamStudents = ({ students }) => {
	console.log('--TeamStudents');
	return (
		<ul className={Styles.container}>
			{Array.isArray(students) && students.length > 0 ? (
				students.map(student => (
					<li key={student.id} className={Styles.student}>
						{student.name} 
					</li>
				))
			) : (
				<li>学生情報がありません</li>
			)}
		</ul>
	);
}

export default TeamStudents;
