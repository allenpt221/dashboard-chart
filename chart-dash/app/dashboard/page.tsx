'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ChartAreaInteractive } from '@/components/area-chart';
import { ChartBarInteractive } from '@/components/chart-bar-interactive';
import { ChartRadarLinesOnly } from '@/components/chart-radar-lines-only';
import { ChartRadialGrid } from '@/components/chart-radial-grid';

function DashboardPage() {
    const [chart, setChart] = useState('areachart');

    const buttonProps = [
        { buttonName: "Area Chart", value: "areachart" },
        { buttonName: "Radial Chart", value: "radialchart" },
        { buttonName: "Bar Chart", value: "barchart" },
        { buttonName: "Radar Chart", value: "radarchart" }
    ];

    return (
        <div className='max-w-[1290px] mx-auto py-10 px-4'>
            {/* Header */}
            <div className='flex flex-col sm:flex-row justify-between items-center mb-6'>
                <h1 className='text-2xl font-semibold text-gray-800 mb-3 sm:mb-0'>
                    Dashboard
                </h1>
                <Link
                    href="/"
                    className='px-4 py-2 bg-black text-white rounded-lg shadow hover:bg-black/60 transition'
                >
                    Back to Main Page
                </Link>
            </div>

            {/* Chart Selection Buttons */}
            <div className='grid md:grid-cols-4 grid-cols-2 gap-3 mb-6'>
                {buttonProps.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setChart(item.value)}
                        className={`px-4 py-2 rounded-lg shadow transition cursor-pointer
                            ${chart === item.value ? 'bg-black text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                    >
                        {item.buttonName}
                    </button>
                ))}
            </div>

            {/* Chart Display */}
            <div className='bg-white rounded-lg shadow p-5'>
                {chart === 'areachart' && <ChartAreaInteractive />}
                {chart === 'radialchart' && <ChartRadialGrid />}
                {chart === 'barchart' && <ChartBarInteractive />}
                {chart === 'radarchart' && <ChartRadarLinesOnly />}
            </div>
        </div>
    );
}

export default DashboardPage;
