/**
 * @description: blob 导出文件
 * @return {*}
 */
export const BlobExport = async (config: {
  url: string
  filename?: string
  options: RequestInit
}) => {
  const { url, filename, options } = config;
  const result: any = await fetch(url, options);
  const blob = await result.blob();
  const downloadElement = document.createElement("a");// 创建一个a 虚拟标签
  const href = window.URL.createObjectURL(blob);
  downloadElement.href = href;
  downloadElement.download = filename || "file"; // 下载后文件名
  document.body.appendChild(downloadElement);
  downloadElement.click(); // 点击下载
  document.body.removeChild(downloadElement); // 下载完成移除元素
  window.URL.revokeObjectURL(href);
}