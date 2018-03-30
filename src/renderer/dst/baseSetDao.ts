/**
 *  1. 读取cluster.ini文件 返回baseSet对象
 *  2. 根据baseSet对象 修改cluster.ini文件
 */
import * as ini from 'ini';
import { BaseSet } from './model/baseSet';
// import { util } from './util';
import * as path from 'path';
import * as log from 'electron-log';
import * as fs from 'fs-extra';
 


/**
 * 从文件 读取基础设置 返回 baseSet对象
 * @param filePath cluster.ini的文件路径
 */
export function readFromFile(filePath: string): BaseSet {

  let baseSet: BaseSet = new BaseSet();

  log.info("开始 读取cluster.ini文件")
  // 如果文件不存在,返回 undefined
  if (!fs.existsSync(filePath)) {
    log.warn("cluster.ini文件不存在.路径" + filePath);
    return baseSet;
  }
  // 基本设置

  // ini 解析
  var config = ini.parse(fs.readFileSync(filePath, 'utf-8'));

  // 游戏风格 
  baseSet.gameStyle = config.NETWORK.cluster_intention||"cooperative";
  // 房间名称
  baseSet.houseName = config.NETWORK.cluster_name||"yy";
  // 描述
  baseSet.describe = config.NETWORK.cluster_description||"";
  // 游戏模式
  baseSet.gameMode = config.GAMEPLAY.game_mode||"endless";
  // PVP
  baseSet.isPvP = config.GAMEPLAY.pvp||false;
  // 人数限制
  baseSet.maxPlayers = config.GAMEPLAY.max_players || 5;
  // 密码
  baseSet.secret = config.NETWORK.cluster_password||"";
  // 服务器模式 offline_cluster=true (true 是 离线 false 是在线)
  baseSet.serverMode = config.NETWORK.offline_cluster||false;
  // 无人时暂停 
  baseSet.isPause = config.GAMEPLAY.pause_when_empty && true;
  // 是否开启洞穴 
  baseSet.isCave = config.SHARD.shard_enabled||false;

  log.info("结束 cluster.ini文件读取.")
  return baseSet;
}


/**
 * 根据baseSet对象写入到文件中
 * @param filePath cluster.ini 路径 例:c:\a.ini
 * @param baseSet baseSet对象
 */
export function writeFile(filePath: string, baseSet: BaseSet): void {

  console.log("开始 根据baseSet对象写入cluster.ini文件.")
  // 如果文件不存在
  if (!fs.existsSync(filePath)) {
    
    console.log("cluster.ini文件不存在,创建文件");
    // 创建目录
    fs.mkdirsSync(path.dirname(filePath));
    // 复制模板文件
    fs.copySync("./resources/cluster.ini",filePath);

    console.log("创建cluster.ini文件完成");
    return;
  }

  // 如果文件存在
  var config = ini.parse(fs.readFileSync(filePath, 'utf-8'));
  config.game_mode=baseSet.gameMode;
  config.max_players=baseSet.maxPlayers;
  config.pvp=baseSet.isPvP;
  config.pause_when_empty=baseSet.isPause;
  config.lan_only_cluster=baseSet.lan_only_cluster;
  config.cluster_intention=baseSet.gameStyle;
  config.cluster_description=baseSet.describe;
  config.cluster_name=baseSet.houseName;
  config.offline_cluster=baseSet.serverMode;
  config.cluster_password=baseSet.secret;
  config.console_enabled=baseSet.console_enabled;
  config.shard_enabled=baseSet.shard_enabled;
  config.bind_ip=baseSet.bind_ip;
  config.master_ip=baseSet.master_ip;
  config.master_port=baseSet.master_port;
  config.cluster_key=baseSet.cluster_key;

  console.log(config);

  fs.writeFileSync(filePath, ini.stringify(config));
  console.log(filePath);
  console.log("结束 根据baseSet对象写入cluster.ini文件.")
}
