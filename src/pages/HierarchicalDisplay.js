import React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';


const dataOne = {
    id: 'root',
    name: 'Employee - 1',
    children: [
        {
            id: '2',
            name: 'Employee - 2',

        },
        {
            id: '3',
            name: "Employee - 3",
            children: [
                {
                    id: '4',
                    name: 'Employee - 4',
                },
                {
                    id: '5',
                    name: 'Employee - 5',
                },
                {
                    id: '6',
                    name: 'Employee - 6',
                },
            ],
        }

    ],
};
const dataTwo = {
    id: 'root',
    name: "Employee - 7",
    children: [
        {
            id: '8',
            name: 'Employee - 8',

        }
    ]
}
const dataThree = {
    id: 'root',
    name: "Employee - 9",
    children: [
        {}
    ]
}


const HierarchicalDisplay = () => {
    const renderTree = (nodes) => (
        <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
            {Array.isArray(nodes.children)
                ? nodes.children.map((node) => renderTree(node))
                : null}
        </TreeItem>
    );

    return (
        <section>
            <TreeView
                aria-label="rich object"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpanded={['root']}
                defaultExpandIcon={<ChevronRightIcon />}
                sx={{
                    height:
                        310, flexGrow: 6, minWidth: 700,
                }}
                style={{ marginTop: '20px' }}
            >
                {renderTree(dataOne)}
                {renderTree(dataTwo)}
                {renderTree(dataThree)}
            </TreeView>
        </section>
    );
}

export default HierarchicalDisplay;