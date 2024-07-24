import React from 'react';

import OnOff from './OnOff';
import Torch from './Torch';
import Zoom from './Zoom';

interface IFinderProps {
    scanning: boolean;
    loading: boolean;
    capabilities: MediaTrackCapabilities;
    border?: number;
    onOff?: boolean;
    startScanning: (deviceId?: string | undefined) => void;
    stopScanning: () => void;
    torch?: {
        status: boolean;
        toggle: (value: boolean) => void;
    };
    zoom?: {
        value: number;
        onChange: (value: number) => void;
    };
}

export default function Finder(props: IFinderProps) {
    const { scanning, loading, capabilities, border = 35, onOff, torch, zoom, startScanning, stopScanning } = props;

    const color = 'rgba(255, 0, 0, 0.5)';
    const stokeWidth = 3;

    return (
        <div style={{ position: 'relative' }}>
            
            {onOff && <OnOff scanning={scanning} startScanning={startScanning} stopScanning={stopScanning} />}
            {torch && capabilities.torch && <Torch scanning={scanning} status={torch.status} torchToggle={torch.toggle} />}
            {zoom && capabilities.zoom && <Zoom scanning={scanning} capabilities={capabilities.zoom} value={zoom.value} onZoom={zoom.onChange} />}
        </div>
    );
}
