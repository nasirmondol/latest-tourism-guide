import { useEffect, useState } from "react"

const useService = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://latest-tourism-guide-server.vercel.app/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return [services, setServices]
}

export default useService;
