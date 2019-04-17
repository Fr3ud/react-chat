export default function titleInitials(title) {
  try {
    return title
      .split(' ')
      .map(word => word[0])
      .map(char => char.toUpperCase())
      .join('');
  } catch (e) {
    console.error(e);
    return '💩';
  }
}