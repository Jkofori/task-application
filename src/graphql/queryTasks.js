import { gql } from '@apollo/client';

const tasksQuery = gql`
    {
        tasks {
            text
            id
        }
    }
`;

export default tasksQuery;