import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const useChartData = ()  => {
    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await axios.get(`http://localhost:4257/api/chart/}`)
                
            }
            catch{}
        };
        fetchData();
    })
}