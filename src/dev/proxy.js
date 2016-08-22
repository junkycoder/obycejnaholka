import { createProxyServer } from 'http-proxy';
import config from 'config/dev';

export default function () {

    const opts = {
        target: {
            port: config.server.port
        }
    };

    const proxy = createProxyServer(opts);

    return (req, res) => proxy.web(req, res);
}