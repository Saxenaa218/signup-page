import { useEffect, useState } from "react";
import { useEdgesState, useNodesState } from "reactflow";
import api from "../api";

export function useBluePrint() {
    const [nodes, setNodes, onNodesChange] = useNodesState();
    const [edges, setEdges, onEdgesChange] = useEdgesState();
    const [urlConfig, setUrlConfig] = useState({});

    useEffect(() => {
        getNodesAndEdges();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getNodesAndEdges() {
        try {
            const { initialEdges, initialNodes, urlRendererConfig } = await api.bluePrintApi();
            setNodes(initialNodes);
            setEdges(initialEdges);
            setUrlConfig(urlRendererConfig);
        } catch (error) {
            console.error(error);
        }
    }

    return {
        nodes,
        edges,
        urlConfig,
        setEdges,
        setNodes,
        onNodesChange,
        onEdgesChange
    };
}
