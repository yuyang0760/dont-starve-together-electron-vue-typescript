
/**
 * 基础设置类
 */
export class BaseSet {
    constructor() {
        this.houseName="";
        this.describe="",
        this.gameStyle="";
        this.serverMode=false;
        this.isPvP=false;
        this.maxPlayers=20;
        this.secret="";
        this.gameMode="";
        this.isPause=true;
        this.isCave=false;

    }
    /**
     * 房间名称
     */
    houseName: string;
    /**
     * 描述
     */
    describe: string;

    /**
     * 游戏风格
     */
    gameStyle: string;

    /**
     * 服务器模式
     */
    serverMode: boolean;

    /**
     * 是否开启PVP
     */
    isPvP: boolean;

    /**
     * 最大人数
     */
    maxPlayers: number;

    /**
     * 密码
     */
    secret: string;

    /**
     * 游戏模式
     */
    gameMode: string;

    /**
     * 是否无人时暂停
     */
    isPause: boolean;

    /**
     * 是否开启洞穴
     */
    isCave: boolean;

    lan_only_cluster: boolean = true;
     console_enabled: boolean = true;
     shard_enabled: boolean = true;
     bind_ip: string = "127.0.0.1";
     master_ip: string = "127.0.0.1";
     master_port: number = 10888;
     cluster_key: string = "defaultPass";




}