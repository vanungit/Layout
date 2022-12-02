import * as React from "react"
import axios from "axios"


const RenderList = React.memo(({ item, index, changeStatus }) => {

    //text2
    const baseURL = 'https://ktwjky3ybe.execute-api.us-east-1.amazonaws.com';
    async function* fetchUsers() {
        try {
            const fetchIds = await axios.post('customers', {}, { baseURL: baseURL })
            const data = await fetchIds.data.customerIds.map(async function (customerId) {
                return await axios.get('customers/' + customerId, { baseURL: baseURL });
            });
            yield Promise.all(data)
        } catch (e) {
            yield console.log('fails', e.toString());
        }
    }
    fetchUsers().next().then(function ({ value }) {
        value.forEach(function ({ data }) {
            console.log(
                data.id +
                ': ' +
                data.first_name +
                ' ' +
                data.last_name
            );
        });
    }).catch(function (err) {
        console.error(err);
    });

    //
    const handleChange = (value, index) => changeStatus(value, index)
    return (
        <>
            <div key={index}>
                <span>{item.first_name}</span>
                <span>{item.last_name}</span>
                <span>{item?.status ? "Online" : "Off line"}</span>
                <input type="checkbox" checked={!!item?.status} onChange={e => handleChange(e.target.checked, index)} />
            </div>
        </>
    )
})

const CoworkerList = ({ coworkers }) => {

    const [state, setState] = React.useState(coworkers)

    const changeStatus = React.useCallback((value, index) => {
        const newState = state.map((person, i) => {
            if (index === i) {
                person.status = value
            }
            return person
        })
        setState(newState)
    }, [state])

    if (!Array.isArray(state)) {
        return "Error"
    } else {
        return (
            <>
                {state.length === 0 ? "Empty list" : state.map((item, index) => <RenderList key={index} index={index} item={item} changeStatus={changeStatus} />)}
            </>
        )
    }
};

CoworkerList.defaultProps = {
    coworkers: [
        { first_name: 'Max', last_name: 'Mustermann' },
        { first_name: 'Vladimir', last_name: 'Leles' },
        { first_name: 'Tobias', last_name: 'Anhalt' },
    ],
};

export default CoworkerList;