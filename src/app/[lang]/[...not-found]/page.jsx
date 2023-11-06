import { notFound } from 'next/navigation'

const CatchAll = ({params}) => {
    return notFound(params={params})
}

export default CatchAll