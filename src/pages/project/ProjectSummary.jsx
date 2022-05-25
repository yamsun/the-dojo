import Avatar from "../../components/Avatar";
import { useFirestore } from '../../hooks/useFirestore'
import { useAuthContext } from "../../hooks/useAuthContext"
import { useHistory } from "react-router-dom"

export default function ProjectSummary({ project }) {
    const { deleteDocument } = useFirestore('projects')
    const { user } = useAuthContext()
    const history = useHistory()

    const handleClick = (e) => {
        deleteDocument(project.id)
        history.push('/')
    }

  return (
    <div> 
        <div className="project-summary">

            <h2 className="page-title">{project.name}</h2>
            <p>By {project.createdBy.displayName} </p>
            
            <p className="due-date">
                Project due by {project.dueDate.toDate().toDateString()}
            </p>

            <p className="details">
                {project.details}
            </p>
            {/* <p style={{display:"flex"}}>Created by: 
                <>
                    <Avatar src={project.createdBy.photoURL} />
                </>
            </p>
            <br/>
            <p>curr user name : {user.displayName}</p>
            <p>curr user id : {user.uid}</p>
            <p>Created by ka id: {project.createdBy.id}</p>

            {user.uid===project.createdBy.id && <p>SAME</p>} */}

            <h4>Project assigned to:</h4>
            <div className="assigned-users">
                {project.assignedUsersList.map(user => (
                    <div key={user.id}>
                        <Avatar src={user.photoURL} title={user.displayName} />
                    </div>
                ))}
            </div>
        </div>
        {user.uid === project.createdBy.id && (
            <button className="btn" onClick={handleClick}>Mark as complete </button>
        )}
    </div> 
  )
}
