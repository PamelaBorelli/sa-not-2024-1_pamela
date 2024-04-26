import React from  'react'
import myfetch from '../lib/myfetch'

export default function UserList(){
    const [users, setUsers] = React.useState([])
    React.useEffect(() => {
        fetchData()
    }, [])

    async function fetchData(){
        try{
            const result = await myfetch.get('/users')
            setUsers(result)
        }
        catch(error){
            console.log(error)
            alert('ERRO: ' + error.message)
        }
    }

    return(
        <>
        <h1>Listagem de usuários</h1>

        <table style={{ border: '1px solid black', borderCollapse: 'collapse'}}>
            <tr>
                <th>Cod.</th>
                <th>Nome Completo</th>
                <th>É admin?</th>
            </tr>
            {
                users.map(u =>(
                    <tr>
                        <td>{u.id}</td>
                        <td>{u.fullname}</td>
                        <td>{u.username}</td>
                        <td>{u.is_admin ? 'Sim':''}</td>
                    </tr>
                ))
            }
        </table>
        </>
    )
}