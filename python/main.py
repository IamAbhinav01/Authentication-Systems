from app.config.logger import get_logger
from app.config.server import exports


logger = get_logger(__name__)

logger.info('checking the service')
logger.info(f"SECRET_PASS: {exports['SECRET_PASS']}")