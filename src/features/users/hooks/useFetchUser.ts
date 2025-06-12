// src/hooks/useUsers.ts

import { useState, useEffect } from 'react';
import type { User } from '../types/userType';
import { getUsers } from '../apis/userApi';

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);  // Estado para almacenar los usuarios
    const [loading, setLoading] = useState<boolean>(true);  // Estado para saber si la carga está en proceso
    const [error, setError] = useState<string | null>(null);  // Estado para manejar posibles errores

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const fetchedUsers = await getUsers();  // Llamamos a la función getUsers
                setUsers(fetchedUsers);  // Actualizamos el estado con los usuarios obtenidos
            } catch (err) {
                setError('Error al cargar los usuarios');  // En caso de error, lo mostramos
            } finally {
                setLoading(false);  // Terminamos el estado de carga
            }
        };

        fetchUsers();  // Llamamos a la función fetchUsers cuando el componente se monta
    }, []);  // El arreglo vacío asegura que solo se ejecute una vez al montar el componente

    return { users, loading, error };  // Devolvemos el estado
};

export default useUsers;
